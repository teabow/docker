# Pull base image.
FROM mhart/alpine-node:4.4.4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install deepstream as an application dependency
RUN npm install deepstream.io deepstream.io-storage-rethinkdb deepstream.io-msg-redis deepstream.io-cache-redis

# Copy start script
COPY start.js start.js

# Link to config volume
VOLUME [ "/etc/deepstream" ]

# Define default command.
CMD [ "node", "start" ]

# Expose HTTP Port 
EXPOSE 6020
# Expose TCP Port 
EXPOSE 6021