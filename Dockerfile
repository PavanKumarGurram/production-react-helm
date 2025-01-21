# Build stage
FROM node:20-alpine as builder
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine-slim

# Add Prometheus metrics support
RUN apk add --no-cache nginx-module-vts
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add non-root user
RUN adduser -D reactuser && \
    chown -R reactuser:reactuser /usr/share/nginx/html && \
    chown -R reactuser:reactuser /var/cache/nginx && \
    chown -R reactuser:reactuser /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R reactuser:reactuser /var/run/nginx.pid

# Copy built assets
COPY --from=builder --chown=reactuser:reactuser /app/dist /usr/share/nginx/html

# Switch to non-root user
USER reactuser

EXPOSE 80 9113
CMD ["nginx", "-g", "daemon off;"]