---
title: Bookmarks
description: Bookmark Configuration
layout: ../../../layouts/MainLayout.astro
---

Bookmarks function much the same as [Services](/en/configs/services), in how groups and lists work. They're just much simpler, smaller, and contain no extra features other than being a link out.

The design of hompage expects `abbr` to be 2 letters, but is not otherwise forced.

You can also use an icon for bookmarks similar to the [options for service icons](/en/configs/services/#icons). If both icon and abbreviation are supplied, the icon takes precedence.

```yaml
- Developer:
    - Github:
        - abbr: GH
          href: https://github.com/

- Social:
    - Reddit:
        - icon: reddit.png
          href: https://reddit.com/

- Entertainment:
    - YouTube:
        - abbr: YT
          href: https://youtube.com/
```

<img width="1000" alt="Bookmarks" src="https://user-images.githubusercontent.com/4887959/200081485-f641e312-106b-415e-a12d-bf4e05f6a511.png">
