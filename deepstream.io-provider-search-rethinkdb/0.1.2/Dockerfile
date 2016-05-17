# Pull base image.
FROM mhart/alpine-node:4.4.4

# Set default environment variables
ENV DEEPSTREAM_HOST localhost
ENV DEEPSTREAM_PORT 6021
ENV RETHINKDB_HOST localhost
ENV RETHINKDB_PORT 28015
ENV RETHINKDB_DATABASE deepstream

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install deepstream as an application dependency
RUN npm install deepstream.io-provider-search-rethinkdb@0.1.2

# Copy start script
COPY search-provider.js search-provider.js

# Define default command.
CMD [ "node", "search-provider" ]