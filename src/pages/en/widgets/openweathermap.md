---
title: OpenWeatherMap
description: OpenWeatherMap Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

The free tier "One Call API" is all thats required, you will need to [subscribe](https://home.openweathermap.org/subscriptions/unauth_subscribe/onecall_30/base) and grab your API key.

```yaml
- openweathermap:
    label: Kyiv #optional
    latitude: 50.449684
    longitude: 30.525026
    units: metric # or imperial
    apiKey: youropenweathermapkey
    cache: 5 # Time in minutes to cache API responses, to stay within limits
```

You can optionally not pass a `latitude` and `longitude` and the widget will use your current location (requires a secure context, eg. HTTPS).
