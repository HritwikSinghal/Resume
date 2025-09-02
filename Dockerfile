# https://calvinf.com/blog/2023/11/10/node-js-20-yarn-4-and-next-js-on-docker/
# https://github.com/yarnpkg/yarn/issues/2739 Yarn will not install devDependencies when NODE_ENV=production
# Need to cleanup and optimize this file. This works for now. will fix later. #todo
## NOTE: MAKE SURE the app is running in prod when deploying via compose. see https://stackoverflow.com/questions/31889867/docker-compose-not-overriding-dockerfile-environment-variables#answer-53705415

# Use the official Node.js image from the Docker Hub
FROM node:24.7.0-trixie-slim AS base

# Setup env variabless for yarn and nextjs
# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production

# Set the working directory in the container
FROM base AS builder
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock .yarnrc.yml ./
# COPY  next-env.d.ts next-sitemap.js next.config.js package.json postcss.config.js stylelint.config.js tailwind.config.js tsconfig.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile
# RUN yarn install --immutable

# Copy the rest of your project files to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Use the official Node.js image for production
FROM base AS runner

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/ .

#COPY --from=builder /app/.next ./.next
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/package.json ./package.json
#COPY --from=builder /app/next.config.js ./next.config.js
#COPY --from=builder /app/next-sitemap.js ./next-sitemap.js

# Expose the port your application will run on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]