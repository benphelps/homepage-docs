---
title: OctoPrint
description: OctoPrintWidget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["printer_state", "temp_tool", "temp_bed", "job_completion"]`.

```yaml
widget:
    type: octoprint
    url: http://octoprint.host.or.ip:port
```

*Added in v0.6.0*
