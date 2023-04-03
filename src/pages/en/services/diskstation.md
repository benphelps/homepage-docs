---
title: Synology Disk Station
description: Synology Disk Station Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Note: the widget is not compatible with 2FA.

An optional 'volume' parameter can be supplied to specify which volume's free space to display
when more than one volume exists. The value of the parameter must be in form of `volume_N`, 
e.g. to display free space for volume2, `volume_2` should be set as 'volume' value. 
If omitted, first returned volume's free space will be shown (not guaranteed to be volume1).

Allowed fields: `["uptime", "volumeAvailable", "resources.cpu", "resources.mem"]`.

```yaml
widget:
    type: diskstation
    url: http://diskstation.host.or.ip:port
    username: username
    password: password
    volume: volume_N # optional
```

*Added in v0.6.7*
