"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULTS = void 0;
const DEFAULTS = {
  protocol: {
    type: 'string',
    default: 'http',
    match: /(http|https)/
  },
  hostname: {
    type: 'string',
    default: 'localhost'
  },
  port: {
    type: 'number',
    default: 4444
  },
  path: {
    type: 'string',
    default: '/wd/hub'
  },
  queryParams: {
    type: 'object'
  },
  capabilities: {
    type: 'object',
    required: true
  },
  logLevel: {
    type: 'string',
    default: 'info',
    match: /(trace|debug|info|warn|error|silent)/
  },
  connectionRetryCount: {
    type: 'number',
    default: 3
  },
  user: {
    type: 'string'
  },
  key: {
    type: 'string'
  },
  agent: {
    type: 'object'
  },
  headers: {
    type: 'object'
  },
  enableDirectConnect: {
    type: 'boolean',
    default: false
  }
};
exports.DEFAULTS = DEFAULTS;