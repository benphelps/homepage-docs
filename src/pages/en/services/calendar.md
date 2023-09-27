---
title: Calendar
description: Calendar widget
layout: ../../../layouts/MainLayout.astro
---

This widget shows monthly calendar, with optional integrations to show events from supported widgets.

```yaml
widget:
  type: calendar
  integration:              # optional
    - type: sonarr          # active widget type that is currently enabled on homepage - possible values: radarr, sonarr, lidarr, readarr
      service_group: Media  # group name where widget exists
      service_name: Sonarr  # service name for that widget
      color: teal           # optional - defaults to pre-defined color for the service (teal for sonarr)
      params:               # optional - additional params for the service
        unmonitored: true   # optional - defaults to false, used with *arr stack
```

Currently integrated widgets are [sonarr](/en/services/sonarr/), [radarr](/en/services/radarr/), [lidarr](/en/services/lidarr) and [readarr](/en/services/readarr).

Supported colors can be found on [color palette](/en/configs/settings/#color-palette).
