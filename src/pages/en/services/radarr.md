---
title: Radarr
description: Radarr Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Find your API key under `Settings > General`.

Allowed fields: `["wanted", "missing", "queued", "movies", "queue"]`. The queue is disabled by default, but can be enabled with the `enableQueue` option.

```yaml
widget:
    type: radarr
    url: http://radarr.host.or.ip
    key: apikeyapikeyapikeyapikeyapikey
    enableQueue: true # optional, defaults to false
```

*Added in v0.1.0*
