---
title: Cloudflare Tunnels
description: Cloudflare Tunnels Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["status", "origin_ip"]`.

```yaml
widget:
    type: cloudflared
    email: email@domain.com #email to logon cloudflare
    accountid: accountid # from zero trust dashboard url e.g. https://one.dash.cloudflare.com/<accountid>/home/quick-start
    tunnelid: tunnelid # found in tunnels dashboard under the tunnel name
    key: cloudflareapikey # global api key you setup in your account at https://dash.cloudflare.com/profile/api-tokens
```

*Added in v0.6.4*
