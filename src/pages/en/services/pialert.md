---
title: PiAlert
description: PiAlert Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Widget for [PiAlert](https://github.com/jokob-sk/Pi.Alert).

Allowed fields: `["total", "connected", "new_devices", "down_alerts"]`.

```yaml
widget:
    type: pialert
    url: http://ip:port
```

*Added in v0.6.21*
