---
title: OPNSense
description: OPNSense Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["uptime", "cpu", "memory", "wanUpload", "wanDownload"]`.

```yaml
widget:
    type: opnsense
    url: http://opnsense.host.or.ip
    username: apikey
    password: apisecret
```

API key / secret can be generated via the admin, see [the opnsense docs](https://docs.opnsense.org/development/how-tos/api.html#creating-keys).

To create a new User for Homepage with the minimal required permissions:

1. Log into OPNSense
2. Navigate to the User Manager page (System > Access > User)
3. Click the `+` to create a new user
4. enter a username
5. Check `Generate a scrambled password to prevent local database logins for this user.` to disable loging in as this user (other than API key usage)
6. Add a comment if you want and leave everything else as-is
7. Click `Save and go back` at the bottom of the page
8. Click on the pencil (edit) next to the new user
9. Scroll to the `Effective Privileges` section
10. Click on the pencil (edit)
11. Check next to both `Diagnostics: System Activity` and `Status: Traffic Graph` permissions
12. Click `Save`
13. Scroll down to the `API keys` section and click the `+`
14. Click `Save`
15. Open the file it just downloaded
16. Use the `key` as your username and `secret` as your password

*Added in v0.5.6*
