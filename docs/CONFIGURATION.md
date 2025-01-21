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

[Rest of the configuration guide remains the same...]