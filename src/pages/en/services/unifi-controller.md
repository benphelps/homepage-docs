---
title: Unifi Controller
description: Unifi Controller Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

You can display general connectivity status from your Unifi (Network) Controller. When authenticating you will want to use an account that has at least read privileges.

An optional 'site' parameter can be supplied, if it is not the widget will use the default site for the controller.

Allowed fields: `["uptime", "wan", "lan_users", "wlan_users"]`.

```yaml
widget:
    type: unifi
    url: https://unifi.host.or.ip:port
    username: username
    password: password
    site: Site Name # optional
```

NOTE: If you're querying a Unifi Dream Machine Pro, then your `url` needs to have `/proxy/network` appended to it and most likely doesn't need the port specified either (port 8443 doesn't even respond on some newer firmwares). An example UDM-Pro widget would look like this:
```yaml
widget:
    type: unifi
    url: https://unifi.host.or.ip/proxy/network
    username: username
    password: password
    site: Site Name # optional
```

*Added in v0.4.18, updated in 0.6.7*
