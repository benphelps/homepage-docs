---
title: Bookmarks
description: Bookmark Configuration
layout: ../../../layouts/MainLayout.astro
---

Bookmarks function much the same as [Services](services), in how groups and lists work. They're just much simpler, smaller, and contain no extra features other than being a link out.

The design of hompage expects `abbr` to be 2 letters, but is not otherwise forced.

```yaml
- Developer:
    - Github:
        - abbr: GH
          href: https://github.com/

- Social:
    - Reddit:
        - abbr: RE
          href: https://reddit.com/

- Entertainment:
    - YouTube:
        - abbr: YT
          href: https://youtube.com/
```

<img width="1038" alt="Bookmarks" src="https://user-images.githubusercontent.com/82196/187041636-872fd1db-4ef9-4639-aafb-5a7b36f62e63.png">
