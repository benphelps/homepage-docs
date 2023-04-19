---
title: Nomad
description: UNomad Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

To enable ACLs, follow [the official Nomad tutorial](https://developer.hashicorp.com/nomad/tutorials/access-control). Keep empty or remove the `key` parameter if not enable ACL.

Allowed fields: `["nodes", "jobs", "volumes", "services"]`.

```yaml
widget:
    type: nomad
    url: http://nomad.host.or.ip:4646
    key: token
```

*Added in dev*
