[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://github.com/subsquid-labs/squid-postgraphile-example)

# Minimal EVM squid that uses PostGraphile

This [squid](https://docs.subsquid.io/sdk/overview/) indexer presents its data using [PostGraphile](https://www.graphile.org/postgraphile/) instead of the [GraphQL server](https://docs.subsquid.io/sdk/resources/graphql-server/) from [Squid SDK](https://docs.subsquid.io/sdk/). It gets the raw data from [Subsquid Network](https://docs.subsquid.io/subsquid-network).

Dependencies: Node.js v16 or newer, Git, Docker.

## PostGraphile configuration

See [`src/api.ts`](src/api.ts).

## Startup

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the example
sqd init my_squid_name -t https://github.com/subsquid-labs/squid-postgraphile-example
cd my_squid_name

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Build the squid
sqd build

# 5. Start both the squid processor and the GraphQL server
sqd run .
```
A GraphiQL playground will be available at [localhost:4350/graphiql](http://localhost:4350/graphiql).

You can also start squid services one by one:
```bash
sqd process
sqd api
```
