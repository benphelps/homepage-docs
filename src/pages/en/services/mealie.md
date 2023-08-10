---
title: Mealie
description: Mealie Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Generate a user API key under `Profile > Manage Your API Tokens > Generate`.

Allowed fields: `["recipes", "users", "categories", "tags"]`.

```yaml
widget:
    type: mealie
    url: http://mealie-frontend.host.or.ip
    key: mealieapitoken
```