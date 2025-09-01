# Use the official Node.js image from the Docker Hub
FROM node:lts-trixie-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of your project files to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Use the official Node.js image for production
FROM node:lts-trixie-slim AS runner

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port your application will run on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]