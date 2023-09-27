---
title: Speedtest Tracker
description: Speedtest Tracker Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

No extra configuration is required. 

This widget is compatible with both [alexjustesen/speedtest-tracker](https://github.com/alexjustesen/speedtest-tracker) and [henrywhitaker3/Speedtest-Tracker](https://github.com/henrywhitaker3/Speedtest-Tracker).


Allowed fields: `["download", "upload", "ping"]`.

```yaml
widget:
    type: speedtest
    url: http://speedtest.host.or.ip
```

*Added in v0.1.0*
