---
title: NextPVR
description: NextPVR Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Basic widget to show number of Upcoming Recordings and Recent Recordings

Allowed fields: `["upcoming", "ready"]`.

```yaml
widget:
    type: nextpvr
    url: http://nextvrp.host.or.ip:8866
    pin: 'nextpvrpin' # This needs to be your NextPVR pin as a string
```

*Added in v0.4.18*
