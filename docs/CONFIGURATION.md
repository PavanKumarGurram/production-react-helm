# Configuration Guide

## 🚀 Deployment Strategy

This application uses a dual deployment approach:

### 1. Direct Kubernetes Manifests (CI/CD Pipeline)

- Located in `k8s/` directory
- Deployed by GitHub Actions
- Used for automated deployments from CI/CD
- Variables substituted at deploy time
- Simpler, more direct approach

### 2. Helm Charts with ArgoCD (GitOps)

- Located in `helm/` directory
- Managed by ArgoCD
- Used for GitOps workflow
- Supports multiple environments
- More sophisticated features:
  - Values templating
  - Environment-specific configs
  - Reusable components
  - Built-in validation
  - Rollback capability
  - Dependency management

## 🔧 Environment Configuration

### Development

```yaml
environment:
  name: development
  domain: dev.example.com
  resources:
    cpu: 100m
    memory: 128Mi
  features:
    debugMode: true
```

### Staging

```yaml
environment:
  name: staging
  domain: staging.example.com
  resources:
    cpu: 150m
    memory: 192Mi
  features:
    debugMode: false
```

### Production

```yaml
environment:
  name: production
  domain: app.example.com
  resources:
    cpu: 200m
    memory: 256Mi
  features:
    debugMode: false
```

## 🔒 Security Configuration

### TLS/SSL

- Managed by cert-manager
- Automatic certificate renewal
- Let's Encrypt integration
- Force HTTPS redirect

### Network Policies

```yaml
ingress:
  - from:
      - namespaceSelector:
          name: ingress-nginx
egress:
  - to:
      - namespaceSelector:
          name: kube-system
```

### Security Headers

```nginx
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

## 📈 Monitoring Configuration

### Prometheus Metrics

- Application metrics
- Resource utilization
- Error rates
- Request latencies

### Grafana Dashboards

- Frontend Overview
- User Experience
- Error Tracking
- Resource Usage

### Alert Rules

```yaml
rules:
  - alert: HighErrorRate
    expr: rate(frontend_errors_total[5m]) > 0.01
  - alert: SlowPageLoad
    expr: histogram_quantile(0.95, page_load_time) > 3s
```

## 🚦 Traffic Management

### Rate Limiting

```nginx
limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;
limit_req zone=one burst=20 nodelay;
```

### Load Balancing

```yaml
strategy:
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 0
```

### Circuit Breaking

```yaml
connectionPool:
  tcp:
    maxConnections: 100
  http:
    maxRequestsPerConnection: 10
```

## 💾 Resource Management

### Pod Resources

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 200m
    memory: 256Mi
```

### Autoscaling

```yaml
autoscaling:
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
```

## 🔄 CI/CD Configuration

### GitHub Actions

- Build and test
- Security scanning
- Container building
- Deployment automation

### ArgoCD

- Application sync
- Health monitoring
- Automated rollbacks
- Progressive delivery

## 📦 Dependencies

### Runtime Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### Development Dependencies

```json
{
  "typescript": "^5.5.3",
  "vite": "^5.4.2",
  "vitest": "^1.3.1"
}
```

## 🧪 Testing Configuration

### Unit Tests

```javascript
// vitest.config.ts
export default {
  test: {
    coverage: {
      threshold: {
        lines: 80,
        functions: 80,
      },
    },
  },
};
```

### E2E Tests

```javascript
// playwright.config.ts
export default {
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
};
```

## 🌐 CDN Configuration

### Cache Rules

```yaml
cacheRules:
  - "*.js:max-age=31536000,immutable"
  - "*.css:max-age=31536000,immutable"
  - "*.png:max-age=31536000,immutable"
  - "/:no-cache"
```

### Edge Locations

- North America
- Europe
- Asia Pacific
- South America

## 🔍 Logging Configuration

### Log Levels

```yaml
logging:
  level: info
  format: json
  retention: 30d
```

### Log Aggregation

- Loki integration
- Log shipping
- Log analysis
- Alert correlation

## 🎯 Feature Flags

### Configuration

```yaml
features:
  newUI: true
  betaFeatures: false
  analytics: true
```

### Management

- Environment-specific
- Runtime toggles
- A/B testing
- Gradual rollouts
