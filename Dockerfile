# Lightweight official Node image
FROM node:20-alpine AS base
WORKDIR /app

# copy package files and install production deps only
COPY package*.json ./
RUN npm ci --only=production

# copy app source
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
