---
title: Syncthing Relay Server
description: Syncthing Relay Server Widget Configuration
---


Pulls stats from the [relay server](https://docs.syncthing.net/users/strelaysrv.html). [See here](https://github.com/benphelps/homepage/pull/230#issuecomment-1253053472) for more information on configuration.

Allowed fields: `["numActiveSessions", "numConnections", "bytesProxied"]`.

```yaml
widget:
    type: strelaysrv
    url: http://syncthing.host.or.ip:22070
```


