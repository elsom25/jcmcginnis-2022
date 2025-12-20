# jcmcginnis.com

Personal website and blog for Jesse McGinnis, built with [Bridgetown 2.0](https://www.bridgetownrb.com/) and [Tailwind CSS 4](https://tailwindcss.com/).

**Live site:** https://jcmcginnis.com

## Tech Stack

- **Static Site Generator:** [Bridgetown 2.0](https://www.bridgetownrb.com/)
- **CSS Framework:** [Tailwind CSS 4](https://tailwindcss.com/) with @tailwindcss/typography
- **Templating:** ERB with custom Ruby helpers
- **Fonts:** [Inter](https://rsms.me/inter/) variable font
- **Deployment:** GitHub Pages via GitHub Actions

## Quick Start

```bash
# Install dependencies
bundle install
npm install

# Start development server (localhost:4000)
bin/bridgetown start

# Build for production
npx @tailwindcss/cli -i frontend/styles/index.css -o src/assets/css/style.css --minify
BRIDGETOWN_ENV=production bin/bridgetown build
```

## Project Structure

```
├── bridgetown.config.yml    # Site configuration
├── config/initializers.rb   # Plugin init & custom helpers
├── frontend/
│   └── styles/index.css     # Tailwind CSS source
├── src/
│   ├── _layouts/            # ERB templates (base → default → post)
│   ├── _partials/           # Reusable components (header, footer)
│   ├── _posts/              # Blog posts in Markdown
│   ├── _data/               # Structured data (menu, site_metadata)
│   ├── assets/              # Built CSS, syntax highlighting, images
│   └── category/            # Category landing pages
└── output/                  # Build output (gitignored)
```

## Writing Blog Posts

Create a new post in `src/_posts/` with the format `YYYY-MM-DD-slug.md`:

```yaml
---
title: "Your Post Title"
permalink: /blog/your-slug/
description: "Optional subtitle"
image: /assets/img/optional-header.jpg
home: true  # Include in homepage rotation
categories:
  - Leadership  # or: Musings, Talks & Workshops
---

Your content in Markdown...
```

## Custom Helpers

Defined in `config/initializers.rb`:

- **`featured_post`** - Returns a featured post for the homepage (recent if within 4 weeks, otherwise rotates daily)
- **`posts_by_year`** - Groups posts by year for the blog index

## License

Content is copyrighted. Code is MIT licensed.
