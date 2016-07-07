# Dockerized deepstream.io

This repository contains three directories with a Dockerfile / Docker compose file

###### deepstream.io

This is a standalone deepstream server.

###### deepstream.io-provider-search-rethinkdb

This is a Node.js app which connects to a RethinkDB and handles
realtime queries. It acts as an deepstream client.

###### deepstream.io-complete-backend

This directory contains a Docker compose file which spins up four containers
and connect them together:

* deepstream.io (server)
* Redis (deepstream cache and message layer)
* RethinkDB (deepstream storage layer)
* deepstream.io-search-provider

All the examples can be used with a Docker compose file.
The images can also be build from a Dockerfile.

For _deepstream.io_ and _deepstream.io-provider-search-rethinkdb_ you can also
use the Docker image from Docker Hub.

To switch between Docker Hub image and Dockerfile build images you need to
disable the `image` line and enable the `build` line in the compose files.
