# Use Node.js version 18
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variable for running in production mode
ENV NODE_ENV=production

# Set the command to run the application
CMD [ "npm", "run", "start" ]
