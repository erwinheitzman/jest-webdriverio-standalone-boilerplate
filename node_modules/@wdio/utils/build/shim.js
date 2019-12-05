"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSync = exports.executeAsync = exports.executeSync = exports.hasWdioSyncSupport = exports.wrapCommand = exports.runFnInFiberContext = exports.executeHooksWithArgs = void 0;

var _logger = _interopRequireDefault(require("@wdio/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = (0, _logger.default)('@wdio/utils:shim');
let hasWdioSyncSupport = false;
exports.hasWdioSyncSupport = hasWdioSyncSupport;
let runSync = null;
exports.runSync = runSync;

let executeHooksWithArgs = async function executeHooksWithArgsShim(hooks, args) {
  if (!Array.isArray(hooks)) {
    hooks = [hooks];
  }

  if (!Array.isArray(args)) {
    args = [args];
  }

  hooks = hooks.map(hook => new Promise(resolve => {
    let result;

    try {
      result = hook.apply(null, args);
    } catch (e) {
      log.error(e.stack);
      return resolve(e);
    }

    if (result && typeof result.then === 'function') {
      return result.then(resolve, e => {
        log.error(e.stack);
        resolve(e);
      });
    }

    resolve(result);
  }));
  return Promise.all(hooks);
};

exports.executeHooksWithArgs = executeHooksWithArgs;

let runFnInFiberContext = function (fn) {
  return function (...args) {
    return Promise.resolve(fn.apply(this, args));
  };
};

exports.runFnInFiberContext = runFnInFiberContext;

let wrapCommand = async function (commandName, fn, ...args) {
  await executeHooksWithArgs.call(this, this.options.beforeCommand, [commandName, args]);
  let commandResult;
  let commandError;

  try {
    commandResult = await fn.apply(this, args);
  } catch (err) {
    commandError = err;
  }

  await executeHooksWithArgs.call(this, this.options.afterCommand, [commandName, args, commandResult, commandError]);

  if (commandError) {
    throw commandError;
  }

  return commandResult;
};

exports.wrapCommand = wrapCommand;

let executeSync = async function (fn, retries, args = []) {
  this.retries = retries.attempts;

  try {
    let res = fn.apply(this, args);

    if (res instanceof Promise) {
      return await res;
    }

    return res;
  } catch (e) {
    if (retries.limit > retries.attempts) {
      retries.attempts++;
      return await executeSync.call(this, fn, retries, args);
    }

    return Promise.reject(e);
  }
};

exports.executeSync = executeSync;

const executeAsync = async function (fn, retries, args = []) {
  this.retries = retries.attempts;

  try {
    return await fn.apply(this, args);
  } catch (e) {
    if (retries.limit > retries.attempts) {
      retries.attempts++;
      return await executeAsync.call(this, fn, retries, args);
    }

    throw e;
  }
};

exports.executeAsync = executeAsync;

try {
  const wdioSync = require('@wdio/sync');

  exports.hasWdioSyncSupport = hasWdioSyncSupport = true;
  exports.runFnInFiberContext = runFnInFiberContext = wdioSync.runFnInFiberContext;
  exports.wrapCommand = wrapCommand = wdioSync.wrapCommand;
  exports.executeHooksWithArgs = executeHooksWithArgs = wdioSync.executeHooksWithArgs;
  exports.executeSync = executeSync = wdioSync.executeSync;
  exports.runSync = runSync = wdioSync.runSync;
} catch (_unused) {}