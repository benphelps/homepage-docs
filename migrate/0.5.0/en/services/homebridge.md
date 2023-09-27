---
title: Homebridge
description: Homebridge
layout: ../../../layouts/MainLayout.astro
---

The Homebridge API is actually provided by the Config UI X plugin that has been included with Homebridge for a while, still it is required to be installed for this widget to work.

Allowed fields: `["updates", "child_bridges"]`.

```yaml
widget:
    type: homebridge
    url: http://homebridge.host.or.ip:port
    username: username
    password: password
```

*Added in v0.5.0*
