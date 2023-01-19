---
title: Helm Installation
description: Install on Kubernetes with Helm
layout: ../../../layouts/MainLayout.astro
---

There is an [unofficial helm chart](https://github.com/jameswynn/helm-charts/tree/main/charts/homepage) that creates all the necessary manifests, including the service account and RBAC entities necessary for service discovery.

```sh
helm repo add jameswynn https://jameswynn.github.io/helm-charts
helm install homepage jameswynn/homepage -f values.yaml
```

The helm chart allows for all the configurations to be inlined directly in your `values.yaml`:

```yaml
config:
  bookmarks:
    - Developer:
        - Github:
            - abbr: GH
              href: https://github.com/
  services:
    - My First Group:
        - My First Service:
            href: http://localhost/
            description: Homepage is awesome

    - My Second Group:
        - My Second Service:
            href: http://localhost/
            description: Homepage is the best

    - My Third Group:
        - My Third Service:
            href: http://localhost/
            description: Homepage is 😎
  widgets:
    # show the kubernetes widget, with the cluster summary and individual nodes
    - kubernetes:
        cluster:
          show: true
          cpu: true
          memory: true
          showLabel: true
          label: "cluster"
        nodes:
          show: true
          cpu: true
          memory: true
          showLabel: true
    - search:
        provider: duckduckgo
        target: _blank
  kubernetes:
    mode: cluster
  settings:

# The service account is necessary to allow discovery of other services
serviceAccount:
  create: true
  name: homepage

# This enables the service account to access the necessary resources
enableRbac: true

ingress:
  main:
    enabled: true
    annotations:
      # Example annotations to add Homepage to your Homepage!
      gethomepage.dev/enabled: "true"
      gethomepage.dev/name: "Homepage"
      gethomepage.dev/description: "Dynamically Detected Homepage"
      gethomepage.dev/group: "Dynamic"
      gethomepage.dev/icon: "homepage.png"
    hosts:
      - host: homepage.example.com
        paths:
          - path: /
            pathType: Prefix
```
