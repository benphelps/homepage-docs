---
title: PiHole
description: PiHole Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

PiHole does not require any authentication for the widget to work, as it uses the data that is exposed publicly.

Allowed fields: `["queries", "blocked", "gravity"]`.

```yaml
widget:
    type: pihole
    url: http://pi.hole.or.ip
```
