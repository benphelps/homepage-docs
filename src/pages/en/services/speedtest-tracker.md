---
title: Speedtest Tracker
description: Speedtest Tracker Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

No extra configuration is required. 

Note that the only version of this software that currently supports an API is henrywhitaker3/Speedtest-Tracker


Allowed fields: `["download", "upload", "ping"]`.

```yaml
widget:
    type: speedtest
    url: http://speedtest.host.or.ip
```

*Added in v0.1.0*
