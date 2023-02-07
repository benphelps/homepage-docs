---
title: Komga
description: Komga Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Uses the same username and password used to login from the web.

Allowed fields: `["libraries", "series", "books"]`.

```yaml
widget:
    type: komga
    url: http://komga.host.or.ip:port
    username: username
    password: password
```

*Added in v0.6.7*
