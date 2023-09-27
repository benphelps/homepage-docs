---
title: Omada
description: Omada Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

The widget supports controller versions 3, 4 and 5.

Allowed fields: `["connectedAp", "activeUser", "alerts", "connectedGateways", "connectedSwitches"]`.

```yaml
widget:
    type: omada
    url: http://omada.host.or.ip:port
    username: username
    password: password
    site: sitename
```

*Added in v0.5.6*
