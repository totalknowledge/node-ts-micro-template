FROM node:lts

# Set working directory
WORKDIR /workspaces/node-ts-micro-template

# Set environmental variables
ENV ENVIRONMENT=dev

# Install app dependencies
COPY service/ .
RUN npm i --silent

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "run", `start:${ENVIRONMENT}` ]