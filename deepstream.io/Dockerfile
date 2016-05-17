# Pull base image.
FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install deepstream as an application dependency
RUN npm install deepstream.io

# Link to config volume
VOLUME [ "/etc/deepstreamio" ]

# Define default command.
CMD [ "node", "./node_modules/deepstream.io/start" ]

# Expose ports.

# HTTP Port 
EXPOSE 6020

# TCP Port 
EXPOSE 6021