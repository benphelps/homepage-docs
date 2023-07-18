---
title: Jellyseerr
description: Jellyseerr Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Find your API key under `Settings > General > API Key`.

Allowed fields: `["total", "movie", "tv", "pending", "approved", "declined", "processing", "available"]`.

```yaml
widget:
    type: jellyseerr
    url: http://jellyseerr.host.or.ip
    key: apikeyapikeyapikeyapikeyapikey
```

*Added in v0.1.4*
