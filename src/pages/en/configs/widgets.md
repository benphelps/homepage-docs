---
title: Information Widgets
description: Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Information widgets are placed above the first horizontal fold line, and can be configured more than once.

As an example, we'll place two resource widgets, one that reports all stats, and one that report only disk usage for a separate location.

```yaml
- resources:
    cpu: true
    memory: true
    disk: /mnt/storage

- resources:
    disk: /mnt/backups
```

Which results in something like this:

<img width="484" alt="Resource Widget" src="https://user-images.githubusercontent.com/82196/189524632-f989de29-9a54-4edb-88a9-e548b9cfc61c.png">
