---
title: Gotify
description: Gotify Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Get a Gotify client token from an existing client or create a new one on your Gotify admin page.

Allowed fields: `["apps", "clients", "messages"]`.

```yaml
widget:
    type: gotify
    url: http://gotify.host.or.ip
    key: clientoken
```

*Added in v0.3.24*
