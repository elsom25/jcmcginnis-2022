# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal website and blog built with Jekyll 4.3 and styled with Tailwind CSS. The site is deployed to GitHub Pages via GitHub Actions.

## Development Commands

### Setup
```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies
npm install
```

### Local Development
```bash
# Start development server with live reload and draft posts
bin/serve

# Alternatively, run Jekyll directly
bin/jekyll serve --livereload --drafts
```

The development server runs on `http://localhost:4000` by default.

### Build
```bash
# Development build
bin/jekyll build

# Production build (with CSS minification)
JEKYLL_ENV=production bin/jekyll build
```

### Code Quality
```bash
# Format Liquid templates, JavaScript, JSON, and YAML files
npx prettier --write .
```

Prettier is configured with the Shopify Liquid plugin for formatting Liquid templates.

## Architecture

### Build System
The site uses a **hybrid build system**:
- **Jekyll** generates HTML from Liquid templates and Markdown posts
- **PostCSS** processes Tailwind CSS through `jekyll-postcss` plugin
- **Tailwind** scans Jekyll files (`_layouts/`, `_includes/`, `_posts/`, root `.html`/`.md` files) for classes

CSS processing chain: PostCSS Import → Tailwind → Autoprefixer → PostCSS Nested → cssnano (production only)

### Content Structure
- `_posts/`: Blog posts in Markdown with YAML frontmatter
  - Frontmatter fields: `title`, `permalink`, `home` (boolean for homepage display)
  - Posts output to `/blog/:title/` URLs
- `_layouts/`: Template hierarchy
  - `base.html`: Root template with `<html>`, `<head>`, Inter font, dark mode support
  - `default.html`: Inherits from base, adds header/footer/nav
  - `post.html`: Blog post template with date, categories, title, optional image
  - `category.html`: Category archive pages
- `_includes/`: Reusable components (`header.html`, `footer.html`)
- `_data/`: Data files for structured content
- `category/`: Category landing pages

### Styling
- Tailwind config extends default theme with:
  - Custom font family: Inter var
  - Custom typography variant: `quoteless` (removes blockquote decoration)
- Dark mode support throughout via Tailwind's `dark:` variant
- Custom syntax highlighting in `assets/css/syntax.css`
- Main stylesheet at `assets/css/style.css` imports Tailwind directives

### Deployment
GitHub Actions workflow (`.github/workflows/jekyll-ghpages.yml`):
1. Installs npm dependencies
2. Builds site in Docker using `jekyll/builder:latest`
3. Deploys `_site/` to GitHub Pages via `crazy-max/ghaction-github-pages`

Triggered on pushes to `main` branch or manual workflow dispatch.

## File Formatting Standards

Follow `.editorconfig` settings:
- LF line endings
- Final newline required
- UTF-8 encoding for `.js`, `.json`, `.yml`
- 2-space indentation for JavaScript, JSON, YAML

## Ruby and Node Versions
- Ruby: Specified in `.ruby-version`
- Node: Specified in `.nvmrc`
