---
title: Jackett
description: Jackett Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Jackett does not require any authentication for the widget to work, as it uses the data that is exposed publicly.

Allowed fields: `["configured", "errored"]`.

```yaml
widget:
    type: jackett
    url: http://jackett.host.or.ip
```
