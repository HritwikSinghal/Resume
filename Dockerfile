# https://nextjs.org/docs/app/getting-started/deploying#docker
# https://github.com/yarnpkg/yarn/issues/2739 Yarn will not install devDependencies when NODE_ENV=production
# (harmless here: everything lives in "dependencies").
## NOTE: MAKE SURE the app is running in prod when deploying via compose. see https://stackoverflow.com/questions/31889867/docker-compose-not-overriding-dockerfile-environment-variables#answer-53705415

# Pin the patched release line: 24.22.1 fixes the October 2026 Node.js security release CVEs.
FROM node:24.22.1-trixie-slim AS base

# Node's bundled roots trust the compromised eMudhra CAs (Oct 2026,
# https://emudhra.we-have-a-problem.com/); install Debian's patched store and make Node use it
# via --use-openssl-ca. Drop NODE_OPTIONS once a fixed Node.js release is the base.
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production NODE_OPTIONS=--use-openssl-ca

FROM base AS builder
WORKDIR /app

# Install deps in their own layer so source edits don't invalidate the yarn cache.
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM base AS runner
WORKDIR /app

# The server runs as plain `node server.js`, so package managers are dead weight and
# extra attack surface in the runtime image.
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/corepack /opt/yarn-* \
    /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack /usr/local/bin/yarn /usr/local/bin/yarnpkg

# "::" listens dual-stack; 0.0.0.0 would drop IPv6 clients (e.g. localhost -> ::1 port forwards).
ENV PORT=3000 HOSTNAME=::

# App files stay root-owned so the unprivileged runtime user cannot modify them; only the
# image-optimizer cache under .next/cache needs to be writable.
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
RUN mkdir -p .next/cache && chown node:node .next/cache

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD ["node", "-e", "fetch('http://127.0.0.1:3000/').then(r => process.exit(r.ok ? 0 : 1), () => process.exit(1))"]

CMD ["node", "server.js"]
