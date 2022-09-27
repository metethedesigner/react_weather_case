FROM node:18.8.0-alpine

# Set working directory
WORKDIR /app

# Add "/app/node_modules/.bin" to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Add app
COPY . ./

# Start App
CMD ["npm", "start"]