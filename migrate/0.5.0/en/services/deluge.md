---
title: Deluge
description: Deluge Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Uses the same password used to login to the webui, see [the deluge FAQ](https://dev.deluge-torrent.org/wiki/Faq#Whatisthedefaultpassword).

Allowed fields: `["leech", "download", "seed", "upload"]`.

```yaml
widget:
    type: deluge
    url: http://deluge.host.or.ip
    password: password # webui password
```

*Added in v0.5.0*
