---
title: Deluge
description: Deluge Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Uses the same username and password used to login from the web.  The default username is admin.

Allowed fields: `["leech", "download", "seed", "upload"]`.

```yaml
widget:
    type: deluge
    url: http://deluge.host.or.ip
    username: username
    password: password
```

*Added in v0.5.0*
