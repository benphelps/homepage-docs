---
title: Atsumeru
description: Atsumeru Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Define same username and password that is used for login from web or supported apps

Allowed fields: `["series", "archives", "chapters", "categories"]`.

```yaml
widget:
    type: atsumeru
    url: http://atsumeru.host.or.ip:port
    username: username
    password: password
```

*Added in v0.6.9*
