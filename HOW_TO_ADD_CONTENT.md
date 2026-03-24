# How to Add Content

## Blog Posts

Create in `_posts/` with filename `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Post Title"
date: 2026-03-01
description: "Brief summary"
categories: [AI, LLMs]
---

Post content in Markdown.
```

Reference superscripts: `<sup>[1](#ref-1)</sup>` in text, `<a id="ref-1"></a>` before each reference at the bottom.

## Projects

Create in `_projects/` with filename `project_name.md`:

```yaml
---
layout: page
title: "Project Name"
description: One-line description.
importance: 1
github: https://github.com/sohv/repo
website: https://example.com
youtube: https://youtube.com/watch?v=xyz
pdf: paper.pdf
---
```

`importance` controls sort order (1 = top). Same importance sorts alphabetically by filename.

## News/Announcements

Create in `_news/` with filename `announcement_name.md`:

```yaml
---
layout: post
date: 2026-03-01
inline: true
related_posts: false
---

Short announcement text.
```

Set `inline: false` and add `title:` for longer announcements.

## Research Projects

Create in `_research/` with filename `project_name.md`:

```yaml
---
layout: page
title: "Research Project"
description: Brief description.
importance: 1
github: https://github.com/sohv/repo
pdf: https://arxiv.org/abs/...
paper: https://paper-link.com
---
```

## Publications

Edit publications directly in `_pages/research.md` and `_includes/selected_papers.liquid` (homepage). Follow the existing HTML structure for each paper entry.

## Art

Add generative art pieces to `_data/art.yml`:

```yaml
items:
  - title: "Art Piece Title"
    slug: art-slug
    thumbnail: /assets/img/art/thumbnail.gif
```

Place interactive sketches in `assets/art/<slug>/` with `index.html` and `sketch.js`.

## Books

Edit `_pages/books.md` to add book covers and reviews. Create book review posts in `_posts/` with:

```yaml
---
layout: book-review
title: "Book Title"
author: "Author Name"
date: 2026-03-01
---

Book review content.
```

## Modifying Pages

- **Homepage about section:** `_pages/about.md`
- **Research page:** `_pages/research.md`
- **Projects page:** `_pages/projects.md` (renders from `_projects/` collection)
- **Books page:** `_pages/books.md`
- **Blog page:** `_pages/blog.md`
- **Art page:** `_pages/art.md`
- **Social links:** `_data/socials.yml`
- **Site config:** `_config.yml`

## File Structure

```
_posts/          Blog posts (YYYY-MM-DD-title.md)
_projects/       Project pages
_research/       Research project pages
_news/           Announcements
_pages/          Site pages
_includes/       Reusable templates
_data/           YAML data files
assets/img/      Images
assets/pdf/      PDFs
```
