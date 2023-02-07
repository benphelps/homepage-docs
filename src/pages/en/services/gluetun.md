---
title: Gluetun
description: Gluetun Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Requires [HTTP control server options](https://github.com/qdm12/gluetun/wiki/HTTP-control-server-options) to be enabled.

Allowed fields: `["public_ip", "region", "country"]`.

```yaml
widget:
    type: gluetun
    url: http://gluetun.host.or.ip
```

*Added in v0.5.0*
