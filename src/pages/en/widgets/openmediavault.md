---
title: OpenMediaVault
description: OpenMediaVault Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

_(Find the OpenMediaVault service widget [here](/en/services/openmediavault/))_


```yaml
- openmediavault:
    url: http://host.or.ip:port
    username: admin
    password: pass
    updates: true # Check for updates, if there are no updates - hidden. True by default
    expanded: true # show the expanded view
    label: MyMachine # optional
```
