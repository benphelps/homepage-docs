---
title: Calendar
description: Calendar widget
layout: ../../../layouts/MainLayout.astro
---

<img alt="calendar" src="https://user-images.githubusercontent.com/5442891/271131282-6767a3ea-573e-4005-aeb9-6e14ee01e845.png">

This widget shows monthly calendar, with optional integrations to show events from supported widgets.

```yaml
widget:
  type: calendar
  firstDayInWeek: sunday    # optional - defaults to monday
  integrations:             # optional
    - type: sonarr          # active widget type that is currently enabled on homepage - possible values: radarr, sonarr, lidarr, readarr
      service_group: Media  # group name where widget exists
      service_name: Sonarr  # service name for that widget
      color: teal           # optional - defaults to pre-defined color for the service (teal for sonarr)
      params:               # optional - additional params for the service
        unmonitored: true   # optional - defaults to false, used with *arr stack
```

Currently integrated widgets are [sonarr](/en/services/sonarr/), [radarr](/en/services/radarr/), [lidarr](/en/services/lidarr) and [readarr](/en/services/readarr).

Supported colors can be found on [color palette](/en/configs/settings/#color-palette).
