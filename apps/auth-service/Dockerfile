# Base Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/auth-service

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Build TypeScript
RUN npm run build

# Expose the service port
EXPOSE 3003

# Start the service
CMD ["npm", "start"]