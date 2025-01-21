# Enterprise React Application

A production-ready React application with complete DevOps pipeline.

## 🏗️ Architecture

![Architecture](https://excalidraw.com/architecture.png)

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest + Playwright
- **Infrastructure**: 
  - Kubernetes manifests for CI/CD
  - Helm charts for GitOps with ArgoCD
- **CI/CD**: 
  - GitHub Actions for automated deployments
  - ArgoCD for GitOps workflow
- **Monitoring**: OpenTelemetry + Prometheus + Grafana

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run E2E tests
npm run test:e2e

# Build for production
npm run build
```

### Docker Build

```bash
docker build -t react-app .
docker run -p 80:80 react-app
```

## 📦 DevOps Setup

### Prerequisites

- Kubernetes cluster
- ArgoCD installed
- Container registry access
- GitHub repository
- Helm 3.x

### GitHub Secrets Required

- `DOCKER_REGISTRY`: Your container registry URL
- `DOCKER_USERNAME`: Registry username
- `DOCKER_PASSWORD`: Registry password
- `KUBE_CONFIG`: Base64 encoded kubeconfig
- `SNYK_TOKEN`: Snyk API token for security scanning

### Infrastructure Components

1. **Helm Charts** (`helm/react-app/`):
   - Main application chart
   - Environment-specific values
   - Infrastructure components
   - Monitoring setup

2. **Kubernetes Resources**:
   - Namespace isolation
   - Resource limits
   - Auto-scaling
   - Network policies
   - Service mesh integration

3. **ArgoCD Configuration**:
   - Automated sync
   - Self-healing
   - Progressive delivery
   - Multi-environment promotion

4. **CI Pipeline**:
   - Unit testing
   - E2E testing
   - Security scanning
   - Build optimization

5. **CD Pipeline**:
   - Environment promotion
   - Automated rollbacks
   - Canary deployments
   - Blue/green deployments

## 🔧 Configuration

### Environment Variables

Create a `.env` file for local development:

```env
VITE_API_URL=your_api_url
VITE_ENVIRONMENT=development
```

### Helm Values

Update `helm/react-app/values.yaml` for deployment:

```yaml
environment:
  name: production
ingress:
  host: your-domain.com
  tls:
    enabled: true
```

### ArgoCD Application

Configure in `argocd/application.yaml`:

```yaml
spec:
  source:
    repoURL: your-repo-url
    path: helm/react-app
```

## 📈 Monitoring

### Metrics

- Page load performance
- Error rates
- User interactions
- Resource usage
- API latencies

### Dashboards

Access Grafana dashboards at:
- Development: https://grafana.dev.example.com
- Staging: https://grafana.staging.example.com
- Production: https://grafana.example.com

### Alerts

Configured alerts for:
- High error rates
- Performance degradation
- Resource constraints
- Availability issues

## 🔒 Security

### Infrastructure Security

- Pod security policies
- Network policies
- RBAC configuration
- Secret management
- TLS encryption

### Application Security

- Dependency scanning
- Container scanning
- Runtime security
- Compliance checks

## 📝 Development Guidelines

### Code Quality

- TypeScript strict mode
- ESLint configuration
- Automated testing
- Code review process

### Git Workflow

1. Branch naming:
   - feature/feature-name
   - fix/bug-description
   - chore/task-description

2. Commit messages:
   ```
   feat: add new feature
   fix: resolve bug
   docs: update documentation
   chore: maintenance tasks
   ```

3. Pull Request Process:
   - Create feature branch
   - Add tests
   - Update documentation
   - Request review
   - Address feedback
   - Merge to main

## 🛠️ Maintenance

### Regular Tasks

1. Dependency Updates:
   ```bash
   npm update
   npm audit fix
   ```

2. Security Scans:
   ```bash
   npm run test:security
   ```

3. Performance Monitoring:
   - Review Grafana dashboards
   - Check error rates
   - Monitor resource usage

### Troubleshooting

1. Application Issues:
   - Check error logs
   - Review metrics
   - Verify recent changes

2. Infrastructure Issues:
   - Check pod status
   - Verify network policies
   - Review resource usage

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests
4. Update documentation
5. Submit pull request

## 🆘 Support

For issues:
1. Check existing GitHub issues
2. Review documentation
3. Create detailed bug report
4. Contact support team

## 📚 Additional Documentation

- [Configuration Guide](docs/CONFIGURATION.md)
- [Deployment Runbook](docs/runbook/deployment.md)
- [Monitoring Guide](docs/runbook/monitoring.md)
- [Architecture Decisions](docs/adr/)