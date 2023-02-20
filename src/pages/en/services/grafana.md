---
title: Grafana
description: Grafana Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["dashboards", "datasources", "totalalerts", "alertstriggered"]`.

```yaml
widget:
    type: grafana
    url: http://grafana.host.or.ip:port
    username: username
    password: password
```

*Added in v0.6.8*
