---
title: TrueNas
description: TrueNas Scale Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["load", "uptime", "alerts"]`.

To create an API Key, follow [the official TrueNAS documentation](https://www.truenas.com/docs/scale/scaletutorials/toptoolbar/managingapikeys/).

```yaml
widget:
    type: truenas
    url: http://truenas.host.or.ip
    key: 1-VIjBXOp1hQA5M6S9Nk4mmwaqCpmmRigbFt3wYFixxwQcUiMOo3oNbmp2PoHj2R3e
```

*Added in v0.5.0*
