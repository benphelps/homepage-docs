---
title: Sonarr
description: Sonarr Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Find your API key under `Settings > General`.

Allowed fields: `["wanted", "queued", "series", "queue"]`. The queue is disabled by default, but can be enabled with the `enableQueue` option.

```yaml
widget:
    type: sonarr
    url: http://sonarr.host.or.ip
    key: apikeyapikeyapikeyapikeyapikey
    enableQueue: true # optional, defaults to false
```

*Added in v0.1.0*
