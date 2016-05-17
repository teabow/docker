# Supported tags and respective Dockerfile links

* 0.0.9, latest (0.0.9/Dockerfile)

[![deepstream.io](https://imagelayers.io/badge/deepstreamio/deepstream.io:latest.svg)](https://imagelayers.io/?images=deepstreamio/deepstream.io:latest)

A docker image of deepstream.io. 

### Note
Once configuration settings are complete, we can pass a configuration file and permissions as volume mappings on start or via environment settings.

## How to use this image

```bash
docker run -d deepstreamio/deepstream.io
```
## How to use your own ports

You can map your desired ports to deepstream for both HTTP and TCP connections

```bash
docker run -d deepstreamio/deepstream.io-provider-search-rethinkdb -p 6021:6021 -p 6020:6020
```