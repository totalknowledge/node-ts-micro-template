# Use lastest node alpine lts for build container
FROM node:lts-alpine AS builder
# Set working directory
WORKDIR /node-ts-micro-template
# Install app dependencies
COPY /service .
RUN npm i --silent --production && npm i @nestjs/cli -g
# Build dist
RUN npm run build

# Use latest node alpine lts for running
FROM node:lts-alpine
# Expose port
EXPOSE 3000
# Define pid 1
CMD [ "node", "/dist/main.js" ]

COPY --from=builder /node-ts-micro-template/dist /dist
COPY --from=builder /node-ts-micro-template/node_modules /node_modules
RUN rm -rf /opt/*
