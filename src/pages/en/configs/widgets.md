---
title: Widgets
description: Widget Configuration
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

## Resources

You can include all or some of the available resources. If you do not want to see that resource, simply pass `false`.

The disk path is the path reported by `df` (Mounted On), or the mount point of the disk.

**Any disk you wish to access must be mounted to your container as a volume.**

```yaml
- resources:
    cpu: true
    memory: true
    disk: /disk/mount/path
```

You can also pass a `label` option, which allows you to group resources under named sections,

```yaml
- resources:
    label: System
    cpu: true
    memory: true

- resources:
    label: Storage
    disk: /mnt/storage
```

Which produces something like this,

<img width="373" alt="Resource Groups" src="https://user-images.githubusercontent.com/82196/189524699-e9005138-e049-4a9c-8833-ac06e39882da.png">

If you have more than a single disk and would like to group them together under the same label, you can pass an array of paths instead,

```yaml
- resources:
    label: Storage
    disk:
      - /mnt/storage
      - /mnt/backup
      - /mnt/media
```

To produce something like this,

<img width="369" alt="Screenshot 2022-09-11 at 2 15 42 PM" src="https://user-images.githubusercontent.com/82196/189524583-abdf4cc6-99da-430c-b316-16c567db5639.png">

You can additionally supply an optional `expanded` property set to true in order to show additional details about the resources. By default the expanded property is set to false when not supplied.

```yaml
- resources:
    label: Array Disks
    expanded: true
    disk:
      - /disk1
      - /disk2
      - /disk3
```

![194136533-c4238c82-4d67-41a4-b3c8-18bf26d33ac2](https://user-images.githubusercontent.com/3441425/194728642-a9885274-922b-4027-acf5-a746f58fdfce.png)

## WeatherAPI

The free tier is all thats required, you will need to [register](https://www.weatherapi.com/signup.aspx) and grab your API key.

```yaml
- weatherapi:
    label: Kyiv # optional
    latitude: 50.449684
    longitude: 30.525026
    units: metric # or imperial
    apiKey: yourweatherapikey
    cache: 5 # Time in minutes to cache API responses, to stay within limits
```

You can optionally not pass a `latitude` and `longitude` and the widget will use your current location (requires a secure context, eg. HTTPS).

## OpenWeatherMap

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

## Unifi Controller

You can display general connectivity status from your Unifi (Network) Controller. When authenticating you will want to use a local account that has at least read privileges.

```yaml
- unifi_console:
    url: https://unifi.host.or.ip:port
    username: user
    password: pass
```

## Search

You can add a search bar to your top widget area that can search using Google, Duckduckgo, Bing, Baidu or any other custom provider that supports the basic `?q=` search query param.

```yaml
- search:
    provider: google # google, duckduckgo, bing, baidu or custom
    focus: true # Optional, will set focus to the search bar on page load
    target: _blank # One of _self, _blank, _parent or _top
```

or for a custom search:

```yaml
- search:
    provider: custom
    url: https://lougle.com/?q=
    target: _blank
```

## Greeting

This allows you to display simple text, can be configured like so:

```yaml
- greeting:
    text_size: xl
    text: Greeting Text
```

Valid text sizes are `4xl`, `3xl`, `2xl`, `xl`, `md`, `sm`, `xs`.

## Date & Time

This allows you to display the date and/or time, can be heavily configured using [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

Formatting is locale aware and will present your date in the regional format you expect, for example, `9/16/22, 3:03 PM` for locale `en` and `16.09.22, 15:03` for `de`.

```yaml
- datetime:
    text_size: xl
    format:
      timeStyle: short
      hour12: false
```

Any options passed to `format` are passed directly to [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat), please reference the MDN documentation for all available options.

Valid text sizes are `4xl`, `3xl`, `2xl`, `xl`, `md`, `sm`, `xs`.

A few examples,

```yaml
# 13:37
format:
  timeStyle: short
  hour12: false
```

```yaml
# 1:37 PM
format:
  timeStyle: short
  hour12: true
```

```yaml
# 1/23/22, 1:37 PM
format:
  dateStyle: short
  timeStyle: short
  hour12: true
```

## Glances

The Glances widget allows you to monitor the resources (CPU + Memory) of another machine, it is designed to match the `resources` info widget. You can have multiple instances by adding another configuration block.

```yaml
- glances:
    url: http://host.or.ip:port
    username: user # optional if auth enabled in Glances
    password: pass # optional if auth enabled in Glances
    label: MyMachine # optional
```