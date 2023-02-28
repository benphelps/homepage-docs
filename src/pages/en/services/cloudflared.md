---
title: Cloudflare Tunnels
description: Cloudflare Tunnels Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

*As of v0.6.10 this widget no longer accepts a Cloudflare global API key (or account email) due to security concerns. Instead, you should setup an API token which only requires the permissions `Account.Cloudflare Tunnel:Read`.*

Allowed fields: `["status", "origin_ip"]`.

```yaml
widget:
    type: cloudflared
    accountid: accountid # from zero trust dashboard url e.g. (https://dash.cloudflare.com/) -> Choose domain -> Overview page -> Right Down Corner Account ID
    tunnelid: tunnelid # found in tunnels dashboard under the tunnel name (https://one.dash.cloudflare.com/) Acces -> Tunnels -> TunnelID
    key: cloudflareapitoken # api token with `Account.Cloudflare Tunnel:Read` https://dash.cloudflare.com/profile/api-tokens
    (create custom token)
    Permissions: Account - Cloudflare Tunnel - Read
    (save the generated key as we need this later)
```

*Added in v0.6.4, updated in v0.6.10*
