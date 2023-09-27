---
title: Prowlarr
description: Prowlarr Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Find your API key under `Settings > General`.

Allowed fields: `["numberOfGrabs", "numberOfQueries", "numberOfFailGrabs", "numberOfFailQueries"]`.

```yaml
widget:
    type: prowlarr
    url: http://prowlarr.host.or.ip
    key: apikeyapikeyapikeyapikeyapikey
```

*Added in v0.3.29*
