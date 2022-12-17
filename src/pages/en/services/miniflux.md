---
title: Miniflux
description: Miniflux Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Api key is found under Settings > API keys

Allowed fields: `["unread", "read"]`.

```yaml
widget:
    type: miniflux
    url: http://miniflux.host.or.ip:port
    key: minifluxapikey
```

*Added in v0.5.5*
