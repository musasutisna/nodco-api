<h1 align="center">Nodejs Config API</h1>

Nodejs config api is package to make easier configuration nodejs configuration intergration with axios.

## Getting started

Lets install nodco-api with npm

```bash
npm install --save @musasutisna/nodco-api
```

## Libraries

- Axios, manage Axios configurations efficiently.

| Method | Type | Description |
|:--|:--|:--|
| apiGET | async | Sends a GET request. |
| apiPOST | async | Sends a POST request. |
| apiPUT | async | Sends a PUT request. |
| apiPATCH | async | Sends a PATCH request. |
| apiDELETE | async | Sends a DELETE request. |

```js
nodcoAPIConfig({
  {
    // configuration will be pass into axios instance
  }
  {
    // default configuration will be pass and combine into method requests
  }
})
```
