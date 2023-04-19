---
title: Channels DVR Server
description: Channels DVR Server Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

An optional 'volume' parameter can be supplied to specify which volume's free space to display
when more than one volume exists. The value of the parameter must be in form of `volume_N`,
e.g. to display free space for volume2, `volume_2` should be set as 'volume' value.
If omitted, first returned volume's free space will be shown (not guaranteed to be volume1).

Allowed fields: `["uptime", "volumeAvailable", "resources.cpu", "resources.mem"]`.

```yaml
widget:
    type: channelsdvrserver
    url: http://192.168.1.55:8089
```
