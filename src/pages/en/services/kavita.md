---
title: Kavita
description: Kavita Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

To obtain the key (bearer token) for Kavita configuration, you can copy it from the local storage. Follow these steps:

1. Log in to your instance of Kavita.
2. Once authenticated, open the browser's Developer Tools and go to the Application or Storage tab.
3. Expand the Local Storage option and find the key that corresponds to the web page's token.
4. Copy the value of the token.
5. Use the copied bearer token in the Kavita widget configuration as instructed.

Allowed fields: `["chapterCount", "seriesCount", "volumeCount"]`.

```yaml
widget:
    type: kavita
    url: http://kavita.host.or.ip
    key: <BEARER_TOKEN> # eyJhbGciOiJIUzUxMiIsInR5cCI6I...
```

_Added in v0.6.9_
