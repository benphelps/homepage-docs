---
title: Unifi Controller
description: Unifi Controller Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

You can display general connectivity status from your Unifi (Network) Controller. When authenticating you will want to use a local account that has at least read privileges.

```yaml
- unifi_console:
    url: https://unifi.host.or.ip:port
    username: user
    password: pass
```
