---
title: Moonraker (Klipper)
description: Moonraker (Klipper) Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["printer_state", "print_status", "print_progress", "layers"]`.

```yaml
widget:
    type: moonraker
    url: http://moonraker.host.or.ip:port
```

*Added in v0.5.11*
