# Docker Setup Guide

This portfolio can be containerized and deployed using Docker.

## Prerequisites

- Docker installed ([Download Docker](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## Building the Docker Image

```bash
# Build image locally
docker build -t moonlorddev-portfolio:latest .

# Or build with a specific tag
docker build -t moonlorddev-portfolio:1.0 .
```

## Running with Docker

### Option 1: Using docker-compose (Recommended)

```bash
# Start container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop container
docker-compose down
```

### Option 2: Using docker run

```bash
# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 \
  --name moonlorddev-portfolio \
  moonlorddev-portfolio:latest

# Run in detached mode
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 \
  --name moonlorddev-portfolio \
  moonlorddev-portfolio:latest

# View logs
docker logs -f moonlorddev-portfolio

# Stop container
docker stop moonlorddev-portfolio

# Remove container
docker rm moonlorddev-portfolio
```

## Environment Variables

Set environment variables when running:

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  -e CONTACT_FORM_ACTION_URL=https://formspree.io/f/xxxxx \
  moonlorddev-portfolio:latest
```

Or in `docker-compose.yml`:

```yaml
environment:
  - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
  - CONTACT_FORM_ACTION_URL=https://formspree.io/f/xxxxx
```

## Accessing the App

Once running, access the portfolio at: **http://localhost:3000**

## Health Check

Docker includes a health check that runs every 30 seconds:

```bash
# Check container health
docker ps

# Status shows: (healthy), (unhealthy), or (starting)
```

## Deployment

### Deploy to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag moonlorddev-portfolio:latest yourusername/moonlorddev-portfolio:latest

# Push to Docker Hub
docker push yourusername/moonlorddev-portfolio:latest
```

### Deploy to Kubernetes

```bash
# Create deployment
kubectl create deployment moonlorddev \
  --image=yourusername/moonlorddev-portfolio:latest

# Expose service
kubectl expose deployment moonlorddev --type=LoadBalancer --port=80 --target-port=3000

# Scale replicas
kubectl scale deployment moonlorddev --replicas=3
```

### Deploy to Docker Compose on Server

```bash
# SSH to server
ssh user@server

# Clone/pull repository
git clone <repo> && cd moonlorddev-portfolio

# Start services
docker-compose up -d

# View logs
docker-compose logs -f
```

## Development vs Production

### Development Build

```bash
# Build with dev dependencies
docker build --target builder -t moonlorddev-portfolio:dev .

# Run with hot-reload (requires volume mount)
docker run -p 3000:3000 \
  -v $(pwd)/src:/app/src \
  moonlorddev-portfolio:dev \
  npm run dev
```

### Production Build

The default Dockerfile creates an optimized production build with:
- Multi-stage build (reduces image size)
- Only production dependencies
- Non-root user (security)
- Health checks
- Alpine base image (smaller footprint)

## Image Size

- Builder stage: ~500MB (discarded)
- Final image: ~200-300MB
  - Base: ~150MB (Node.js Alpine)
  - App: ~50-150MB (dependencies + built app)

## Troubleshooting

### Port Already in Use

```bash
# Use different port
docker run -p 8080:3000 moonlorddev-portfolio:latest

# Or find/kill process using port 3000
lsof -i :3000
kill -9 <PID>
```

### Container Exits Immediately

```bash
# Check logs
docker logs <container-id>

# Run with interactive terminal
docker run -it moonlorddev-portfolio:latest sh
```

### Permission Denied Errors

The Dockerfile runs as non-root user `nextjs` for security. Ensure:
- Files are readable by this user
- Port 3000 is available

## Useful Docker Commands

```bash
# List images
docker images

# List containers
docker ps -a

# Remove image
docker rmi moonlorddev-portfolio:latest

# Clean up unused images/containers
docker system prune

# View image history
docker history moonlorddev-portfolio:latest

# Inspect image
docker inspect moonlorddev-portfolio:latest
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Docker Build and Push

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t moonlorddev-portfolio:${{ github.sha }} .
      
      - name: Push to Docker Hub
        run: docker push yourusername/moonlorddev-portfolio:${{ github.sha }}
```

## References

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment/docker)
- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
