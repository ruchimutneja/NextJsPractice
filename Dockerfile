# Use the official Node.js image as the base image
FROM node:18
# Set the working directory inside the container
WORKDIR /pages
# Copy package.json and package-lock.json files to the container
COPY package*.json ./
# Install project dependencies
RUN npm install
# Copy the rest of the application code to the container
COPY . .
# Build the Next.js application
RUN npm run build
EXPOSE 3000
EXPOSE 8088
# Specify the command to start the Next.js app
CMD ["npm", "start"]