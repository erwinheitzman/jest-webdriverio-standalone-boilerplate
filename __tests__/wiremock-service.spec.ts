import nodeFetch, { Response } from "node-fetch";

test(`a mocked api response created using WireMock's fixtures`, async () => {
  await chrome.url("http://localhost:8080/dummy_data");
  const body = await chrome.$("body");
  expect(await body.getText()).toEqual("this is a fixture, and it works!\n");
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
      .then((body: object) => expect(body).toEqual(expectedRes));
  });
});
