import { test } from "@jest/globals";
import { expect } from "expect-webdriverio";
import nodeFetch, { Response } from "node-fetch";

test(`a mocked api response created using WireMock's fixtures`, async () => {
  await chrome.url("http://localhost:8080/dummy_data");
  await expect(chrome.$("body")).toHaveText("this is a fixture, and it works!");
});

test(`a mocked api response created using WireMock's HTTP API`, async () => {
  const expectedRes = {
    dummy: [
      {
        data: "example",
      },
    ],
  };

  const body = JSON.stringify({
    request: {
      method: "GET",
      url: "/new_data",
    },
    response: {
      status: 200,
      jsonBody: expectedRes,
    },
  });

  await chrome.call(async () => {
    await nodeFetch("http://localhost:8080/__admin/mappings/new", {
      method: "POST",
      body,
    });

    await nodeFetch("http://localhost:8080/new_data")
      .then((res: Response) => res.json())
      .then((body) => expect(body).toEqual(expectedRes));
  });
});
