---
title: Glances
description: Glances Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

The Glances widget allows you to monitor the resources (CPU, memory, CPU temp & Uptime) of another machine, it is designed to match the `resources` info widget. You can have multiple instances by adding another configuration block. The `cputemp` & `uptime` states require separate API calls and thus are not enabled by default

```yaml
- glances:
    url: http://host.or.ip:port
    username: user # optional if auth enabled in Glances
    password: pass # optional if auth enabled in Glances
    cputemp: true # disabled by default
    uptime: true # disabled by default
    label: MyMachine # optional
```

*Added in v0.4.18, updated in v0.6.11*
