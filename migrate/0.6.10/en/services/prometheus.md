---
title: Prometheus
description: Prometheus Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["targets_up", "targets_down", "targets_total"]`

```yaml
widget:
    type: prometheus
    url: http://prometheushost:port
```

*Added in v0.6.10*
