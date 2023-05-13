---
title: pfSense API
description: pfSense API Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

This widget requires the installation of the [pfsense-api](https://github.com/jaredhendrickson13/pfsense-api) which is a 3rd party package for pfSense routers.

Once pfSense API is installed, you can set the API to be read-only in System > API > Settings.

Currently the only supported authentication mode is 'Local Database'.

WAN interface to monitor can be defined by updating the `wan` param.

Load is returned instead of cpu utilisation. This is a limitation in the pfSense API due to the complexity of this calculation. This may become available in future versions.

Allowed fields: `["load", "memory", "disk", "temp", "wanStatus", "wanIP"]`.

```yaml
widget:
    type: pfsenseapi
    url: http://pfsenseapi.host.or.ip:port
    username: user
    password: pass
    wan: igb0
```

*Added in dev*
