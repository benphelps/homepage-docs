---
title: Services
description: Service Configuration
layout: ../../../layouts/MainLayout.astro
---

The `settings.yaml` file allows you to define application level options. For changes made to this file to take effect, you will need to regenerate the static HTML, this can be done by clicking the refresh icon in the bottom right of the page.

## Title

You can customize the title of the page if you'd like.

```yaml
title: My Awesome Homepage
```

## Background Image

If you'd like to use a background image instead of the solid theme color, you may provide a full URL to an image of your choice.

```yaml
background: https://images.unsplash.com/photo-1502790671504-542ad42d5189?auto=format&fit=crop&w=2560&q=80
```

Or you may pass the path to a local image relative to the `/app/public` directory, which could be configured like this,

Inside of your Docker Compose file, mount a path to where your images are kept:

```yaml
volumes:
  - /my/homepage/images:/app/public/images
```

and then reference that image:

```yaml
background: /images/background.png
```

### Background Opacity

You can change the opacity of the background, to blend it with the primary theme color,

```yaml
backgroundOpacity: 0.5
```

## Favicon

If you'd like to use a custom favicon instead of the included one, you may provide a full URL to an image of your choice.

```yaml
favicon: https://www.google.com/favicon.ico
```

Or you may pass the path to a local image relative to the `/app/public` directory. See [Background Image](#background-image) for more detailed information on how to provide your own files.

## Theme

You can configure a fixed them (and disable the theme switcher) by passing the `theme` option, like so:

```yaml
theme: dark # or light
```

## Color Palette

You can configured a fixed color palette (and disable the palette switcher) by passing the `color` option, like so:

```yaml
color: slate
```

Supported colors are: `slate`, `gray`, `zinc`, `neutral`, `stone`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `red`, `white`

## Layout

You can configure service sections to be either "column" or "row" based layouts, like so:

Assuming you have a group named `Media` in your `services.yaml` file,

```yaml
layout:
  Media:
    style: row
    columns: 4
```

As an example, this would produce the following layout:

<img width="1260" alt="Screenshot 2022-09-15 at 8 03 57 PM" src="https://user-images.githubusercontent.com/82196/190466646-8ca94505-0fcf-4964-9687-3a6c7cd3144f.png">

## Header Style

There are currently 3 options for header styles, you can see each one below.

<img width="1000" alt="underlined" src="https://user-images.githubusercontent.com/82196/194725622-39ce271c-34e5-414d-be53-62d221811f88.png">

```yaml
headerStyle: underlined # default style
```

---

<img width="1000" alt="boxed" src="https://user-images.githubusercontent.com/82196/194725645-abcb8ed9-d017-416f-9e74-cc5642fa982c.png">

```yaml
headerStyle: boxed
```

---

<img width="1000" alt="clean" src="https://user-images.githubusercontent.com/82196/194725650-7a86e818-172d-4d0f-9861-5eae7fecb50a.png">

```yaml
headerStyle: clean
```

## Base URL

In some proxy configurations, it may be necessary to set the documents base URL. You can do this by providing a `base` value, like so:

```yaml
base: http://host.local/homepage
```

**_The URL must be a full, absolute URL, or it will be ignored by the browser._**

## Language

You may override the browser language detection by setting your desired language manually using:

```yaml
language: fr
```

Currently supported languages: ca, de, en, es, fr, he, hr, hu, it, nb-NO, nl, pt, ru, sv, vi, zh-CN, zh-Hant

## Link Target

Changes the behaviour of links on the homepage,

```yaml
target: _blank # Possible options include _blank, _self, and _top
```

Use `_blank` to open links in a new tab, `_self` to open links in the same tab, and `_top` to open links in a new window.

This can also be set for individual services. Note setting this at the service level overrides any setting in settings.json, e.g.:

```yaml
- Example Service:
    href: https://example.com/
    ...
    target: _self
```

## Providers

The `providers` section allows you to define shared API provider options and secrets. Currently this allows you to define your weather API keys in secret.

```yaml
providers:
  openweathermap: openweathermapapikey
  weatherapi: weatherapiapikey
```

You can then pass `provider` instead of `apiKey` in your widget configuration.

```yaml
- weather:
    latitude: 50.449684
    longitude: 30.525026
    provider: weatherapi
```
