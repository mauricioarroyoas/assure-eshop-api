# Use Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose port your app runs on
EXPOSE 3000

#for debugger
EXPOSE 9229

# Run the app (use `npm run dev` for development, `start` for prod)
CMD ["npm", "run", "dev"]
