# deepstream.io-provider-search-rethinkdb docker file

## Supported tags and respective Dockerfile links

* 0.1.2, latest (0.1.2/Dockerfile)

[![deepstream.io-provider-search-rethinkdb](https://imagelayers.io/badge/deepstreamio/deepstream.io-provider-search-rethinkdb:latest.svg)](https://imagelayers.io/?images=deepstreamio/deepstream.io-provider-search-rethinkdb:latest)

A docker image for deepstream.io-provider-search-rethinkdb, used to provide real-time search querying to deepstream.

### How to use this image

```bash
docker run -d deepstreamio/deepstream.io-provider-search-rethinkdb
```

This image uses the current default environment values:

```bash
DEEPSTREAM_HOST localhost
DEEPSTREAM_PORT 6021
RETHINKDB_HOST localhost
RETHINKDB_PORT 28015
RETHINKDB_DATABASE deepstream
```

### How to use with custom database / deepstream urls

```bash
docker run -d deepstreamio/deepstream.io-provider-search-rethinkdb -e DEEPSTREAM_HOST=localhost
```