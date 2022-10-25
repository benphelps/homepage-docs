---
title: Unifi Controller
description: Unifi Controller Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

You can display general connectivity status from your Unifi (Network) Controller. When authenticating you will want to use a local account that has at least read privileges.

<img width="162" alt="unifi_infowidget" src="https://user-images.githubusercontent.com/4887959/197706832-f5a8706b-7282-4892-a666-b7d999752562.png">

```yaml
- unifi_console:
    url: https://unifi.host.or.ip:port
    username: user
    password: pass
```

*Added in v0.4.18*
