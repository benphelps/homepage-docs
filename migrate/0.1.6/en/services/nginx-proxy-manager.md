---
title: Nginx Proxy Manager
description: Nginx Proxy Manager Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Login with the same admin username and password used to access the web UI.

Allowed fields: `["enabled", "disabled", "total"]`.

```yaml
widget:
    type: npm
    url: http://npm.host.or.ip
    username: admin_username
    password: admin_password
```

*Added in v0.1.6*
