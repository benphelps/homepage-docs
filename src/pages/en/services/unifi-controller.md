---
title: Unifi Controller
description: Unifi Controller Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

You can display general connectivity status from your Unifi (Network) Controller. When authenticating you will want to use an account that has at least read privileges.

Allowed fields: `["uptime", "wan", "lan_users", "wlan_users"]`.

```yaml
widget:
    type: unifi
    url: https://unifi.host.or.ip:port
    username: username
    password: password
```
