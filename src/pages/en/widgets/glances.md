---
title: Glances
description: Glances Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

The Glances widget allows you to monitor the resources (CPU + Memory) of another machine, it is designed to match the `resources` info widget. You can have multiple instances by adding another configuration block.

```yaml
- glances:
    url: http://host.or.ip:port
    username: user # optional if auth enabled in Glances
    password: pass # optional if auth enabled in Glances
    label: MyMachine # optional
```

*Added in v0.4.18*
