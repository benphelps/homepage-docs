---
title: Nextcloud
description: Nextcloud Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Use username & password, or the `NC-Token` key. Information about the token can be found under **Settings** > **System**. If both are provided, NC-Token will be used.

Allowed fields: `["cpuload", "memoryusage", "freespace", "activeusers"]`.

```yaml
widget:
    type: nextcloud
    url: https://nexcloud.host.or.ip:port
    key: token
```

```yaml
widget:
    type: nextcloud
    url: https://nexcloud.host.or.ip:port
    username: username
    password: password
```


*Added in v0.6.8*
