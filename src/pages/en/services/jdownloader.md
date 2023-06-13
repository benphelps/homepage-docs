---
title: JDownloader
description: NextPVR Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Basic widget to show number of items in download queue, along with the queue size and current download speed.

Allowed fields: `["downloadCount", "downloadQueueSize", "downloadSpeed"]`.

```yaml
widget:
    type: jdownloader
    username: JDownloader Username
    password: JDownloader Password
    client: Name of JDownloader Instance
```

*Added in v0.4.18*
