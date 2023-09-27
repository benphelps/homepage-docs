---
title: qBittorrent
description: qBittorrent Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Uses the same username and password used to login from the web.

Allowed fields: `["leech", "download", "seed", "upload"]`.

```yaml
widget:
    type: qbittorrent
    url: http://qbittorrent.host.or.ip
    username: username
    password: password
```

*Added in v0.3.55*
