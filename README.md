# Firefly III TypeScript SDK (Fetch)

## Installation

```shell
npm i firefly-iii-typescript-sdk-fetch 
```

## Usage

For example, to list accounts:
```shell
new AccountsApi(
  new Configuration({
    basePath: "https://<your-firefly-address>",
    accessToken: `Bearer ${token}`,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/vnd.api+json",
    },
    fetchApi: self.fetch.bind(self),
  }),
)
  .listAccount({})
  .then((r: any) => console.log(JSON.stringify(r)));
```
