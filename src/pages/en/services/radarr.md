---
title: Radarr
description: Radarr Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Find your API key under `Settings > General`.

Allowed fields: `["wanted", "missing", "queued", "movies"]`.

```yaml
widget:
    type: radarr
    url: http://radarr.host.or.ip
    key: apikeyapikeyapikeyapikeyapikey
```

*Added in v0.1.0*
