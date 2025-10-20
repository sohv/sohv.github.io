# How to Add Content to Your Site

## 📰 Adding News/Announcements to Homepage

News items appear in the announcements section on your homepage.

### Location
Create files in: `_news/`

### Format
Filename: `announcement_name.md` (any name)

### Two Types of News:

#### 1. Short Inline Announcement
```yaml
---
layout: post
date: 2024-01-15 07:59:00-0400
inline: true
related_posts: false
---

Your short announcement text here.
```

#### 2. Longer Announcement with Title
```yaml
---
layout: post
title: Your Announcement Title
date: 2024-02-01 16:11:00-0400
inline: false
related_posts: false
---

Your longer announcement with full details here.
You can use Markdown formatting!
```

### Example Files
See `_news/announcement_1.md` and `_news/announcement_2.md` for examples.

---

## 🎯 Adding Projects

### Location
Create files in: `_projects/`

### Format
Filename: `project_name.md`

```yaml
---
layout: page
title: My Awesome Project
description: A brief description of what this project does
img: assets/img/my-project.jpg        # Optional: preview image
importance: 1                           # Sort order (1 = first)
github: https://github.com/sohv/repo   # Optional: GitHub link
website: https://yourproject.com       # Optional: website link
youtube: https://youtube.com/watch?v=xyz  # Optional: video link
pdf: project-paper.pdf                 # Optional: PDF (place in assets/pdf/)
---

Optional detailed content here (not shown on main projects page).
You can add images, code, explanations, etc.
```

### Adding Project Images

1. **Place image in:** `assets/img/`
   - Example: `assets/img/my-project.jpg`

2. **Reference in project file:**
   ```yaml
   img: assets/img/my-project.jpg
   ```

The image will appear as a thumbnail on the projects page!

### Example
See `_projects/example_project.md` for a complete example.

---

## 📝 Adding Blog Posts

### Location
Create files in: `_posts/`

### Format
Filename: **MUST** be `YYYY-MM-DD-title.md`
- Example: `2024-10-20-my-first-post.md`

```yaml
---
layout: post
title: Your Blog Post Title
date: 2024-10-20 10:00:00
description: A brief summary of your post
tags: research ai python
categories: tutorial
---

# Your Blog Post Content

Write your post here using Markdown!

## Section 1

You can include:
- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks
- Images
- Math equations

## Including Images

{% include figure.liquid path="assets/img/your-image.jpg" class="img-fluid rounded z-depth-1" %}

## Code Blocks

```python
def hello_world():
    print("Hello, World!")
```

## Math

Inline: $$E = mc^2$$

Display:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### Example
See `_posts/2024-01-01-example-blog-post.md` for a complete example.

---

## 📚 Adding Research Publications

### Location
Edit: `_bibliography/papers.bib`

### Format
Add BibTeX entries:

```bibtex
@article{venkatesh2024example,
  abbr={CONF},
  title={Your Paper Title},
  author={Venkatesh, Sohan and Coauthor, Name},
  journal={Conference/Journal Name},
  year={2024},
  url={https://paper-url.com},
  html={https://paper-url.com},
  pdf={paper.pdf},                    % Place PDF in assets/pdf/
  code={https://github.com/sohv/code},
  website={https://project-site.com},
  selected={true}                     % Mark important papers
}
```

### Available Fields:
- `abbr` - Conference/journal abbreviation (shown as badge)
- `title` - Paper title
- `author` - Authors (your name will be highlighted automatically)
- `journal` / `booktitle` - Venue name
- `year` - Publication year
- `url` / `html` - Paper link
- `pdf` - PDF filename (place in `assets/pdf/`)
- `code` - GitHub repository
- `website` - Project website
- `video` - Video link
- `slides` - Slides PDF
- `poster` - Poster PDF
- `selected` - Set to `true` for important papers

---

## 📁 File Structure Summary

```
your-site/
├── _news/              # News announcements
├── _posts/             # Blog posts (YYYY-MM-DD-title.md)
├── _projects/          # Project pages
├── _bibliography/      # Research publications (papers.bib)
└── assets/
    ├── img/           # Images for projects, blog, profile
    └── pdf/           # PDFs for papers, CVs, etc.
```

---

## 🚀 Quick Start

1. **Add a news item:** Create `_news/my-news.md`
2. **Add a project:** Create `_projects/my-project.md` with an image
3. **Add a blog post:** Create `_posts/2024-10-20-my-post.md`
4. **Add a paper:** Edit `_bibliography/papers.bib`

That's it! Jekyll will automatically generate your site.
