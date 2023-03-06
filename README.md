# Node Nest.js Microservice Template

## Docker Startup
```
docker network create test-bridge

docker build . -t nestjs-micro
docker run -d -p 3000:3000 --name=node-nestjs-micro-template --network test-bridge nestjs-micro

docker build . -t api-gateway
docker run -d -p 10000:10000 --name=api-gateway --network test-bridge api-gateway
```

MIT