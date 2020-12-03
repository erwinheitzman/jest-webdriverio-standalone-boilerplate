import { remote } from 'webdriverio';
import { config } from '../wdio.conf';
import nodeFetch from 'node-fetch';

let browser: WebdriverIO.BrowserObject;

const expectedRes = {
  dummy: [
    {
    data: 'example'
    }
  ]
};

beforeAll(async () => {
  browser = await remote(config);
});

afterAll(async () => {
  await browser.deleteSession();
});

test(`a mocked api response created using WireMock's fixtures`, async () => {
  await browser.url('http://localhost:8080/dummy_data');
  const body = await browser.$('body');
  expect(await body.getText()).toEqual('this is a fixture, and it works!');
});

test(`a mocked api response created using WireMock's HTTP API`, async () => {
  const expectedRes = {
    dummy: [
      {
      data: 'example'
      }
    ]
  };

  const body = JSON.stringify({
    request: {
        method: 'GET',
        url: '/new_data'
    },
    response: {
      status: 200,
      jsonBody: expectedRes
    }
  });

  await browser.call(async () => {
    await nodeFetch('http://localhost:8080/__admin/mappings/new', { method: 'POST', body });

    await nodeFetch('http://localhost:8080/new_data')
      .then((res: any) => res.json())
      .then((body: any) => expect(body).toEqual(expectedRes));
    });
});
