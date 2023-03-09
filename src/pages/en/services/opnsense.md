---
title: OPNSense
description: OPNSense Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

The API key & secret can be generated via the webui, by creating a new user at `System/Access/Users` called `homepage-api`, ensuring `Generate a scrambled password to prevent local database logins for this user.` is checked, and then edit the effective privileges selecting `Diagnostics: System Activity` & `Status: Traffic Graph` only.  Finally, create a new API key which will download an `apikey.txt` file with your key and secret in it.  Paste the contents following the = symbol in both lines to the username and password fields below.

Allowed fields: `["cpu", "memory", "wanUpload", "wanDownload"]`.

```yaml
widget:
    type: opnsense
    url: http://opnsense.host.or.ip
    username: key
    password: secret
```

*Added in v0.5.6*
