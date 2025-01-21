# Deployment Runbook

## Prerequisites
- Access to Kubernetes cluster
- Docker registry credentials
- Helm installed locally

## Deployment Steps

### 1. Build and Push
```bash
# Build Docker image
docker build -t registry.example.com/react-app:${VERSION} .

# Push to registry
docker push registry.example.com/react-app:${VERSION}
```

### 2. Deploy with Helm
```bash
# Update dependencies
helm dependency update ./helm/react-app

# Deploy to environment
helm upgrade --install react-app ./helm/react-app \
  --namespace react-app \
  --set image.tag=${VERSION} \
  --values ./helm/react-app/values.yaml
```

### 3. Verify Deployment
```bash
# Check pods
kubectl get pods -n react-app

# Check services
kubectl get svc -n react-app

# Check ingress
kubectl get ingress -n react-app
```

## Common Issues

### Pod Startup Failure
1. Check pod logs:
   ```bash
   kubectl logs -n react-app ${POD_NAME}
   ```
2. Verify resource limits
3. Check image pull status

### Service Unavailable
1. Verify service endpoints:
   ```bash
   kubectl get endpoints -n react-app
   ```
2. Check ingress configuration
3. Verify TLS certificates