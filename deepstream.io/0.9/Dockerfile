# Pull base image.
FROM mhart/alpine-node:4.4.4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install deepstream as an application dependency
RUN npm install deepstream.io@0.9

# Link to config volume
VOLUME [ "/etc/deepstream" ]

# Define default command.
CMD [ "node", "./node_modules/deepstream.io/start" ]

# Expose ports.

# HTTP Port 
EXPOSE 6020

# TCP Port 
EXPOSE 6021