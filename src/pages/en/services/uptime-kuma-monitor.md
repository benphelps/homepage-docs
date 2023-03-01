---
title: Uptime Kuma Monitor
description: Uptime Kuma Monitor Widget Configuration
layout: ../../../layouts/MainLayout.astro
---
This is a continuation of the standard Uptime Kuma widget, but this version allows you to query a specific monitor. You will also need to have the monitor present in ANY status page, but it does not matter which. Uptime Kuma does not expose the monitor information if the monitor is not listed on a status page somewhere.

You can get the idNumOfMonitor from the URL of the dashboard entry (i.e http:/uptime.host/edit/idNum)

```yaml
widget:
    type: uptimekumamonitor
    url: http://uptimekuma.host.or.ip:port
    monitor: idNumOfMonitor
````