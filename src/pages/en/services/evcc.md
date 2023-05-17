---
title: EVCC
description: EVCC Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["pvPower", "gridpower", "homepower", "chargePower]`.

```yaml
widget:
    type: evcc
    url: http://evcc.host.or.ip:7070
```

*Added in v0.6.17*