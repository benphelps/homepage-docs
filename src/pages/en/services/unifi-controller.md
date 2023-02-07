---
title: Unifi Controller
description: Unifi Controller Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

You can display general connectivity status from your Unifi (Network) Controller. When authenticating you will want to use an account that has at least read privileges.

An optional 'site' parameter can be supplied, if it is not the widget will use the default site for the controller.

Allowed fields: `["uptime", "wan", "lan_users", "wlan_users"]`.

```yaml
widget:
    type: unifi
    url: https://unifi.host.or.ip:port
    username: username
    password: password
    site: Site Name # optional
```

*Added in v0.4.18, updated in 0.6.7*
