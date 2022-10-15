---
title: Date & Time
description: Date & Time Information Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

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
