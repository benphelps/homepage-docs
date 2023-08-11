---
title: Jackett
description: Jackett Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Jackett must not have any authentication for the widget to work.

Allowed fields: `["configured", "errored"]`.

```yaml
widget:
    type: jackett
    url: http://jackett.host.or.ip
```

*Added in v0.3.39*
