# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal website and blog built with Bridgetown 2.0 and styled with Tailwind CSS 4. The site is deployed to GitHub Pages via GitHub Actions.

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
# Start development server with live reload
bin/bridgetown start
```

The development server runs on `http://localhost:4000` by default.

### Build
```bash
# Build CSS with Tailwind
npx @tailwindcss/cli -i frontend/styles/index.css -o src/assets/css/style.css --minify

# Development build
bin/bridgetown build

# Production build
BRIDGETOWN_ENV=production bin/bridgetown build
```

### Code Quality
```bash
# Format files with Prettier
npx prettier --write .
```

## Architecture

### Build System
The site uses **Bridgetown 2.0** with:
- **ERB templates** for layouts and partials (full Ruby support)
- **Tailwind CSS 4** with the new CSS-based configuration
- **esbuild** for JavaScript bundling (configured but minimal JS used)

### Content Structure
- `src/_posts/`: Blog posts in Markdown with YAML frontmatter
  - Frontmatter fields: `title`, `permalink`, `description`, `image`, `home`, `categories`
  - Posts output to `/blog/:title/` URLs
- `src/_layouts/`: ERB template hierarchy
  - `base.erb`: Root template with `<html>`, `<head>`, Inter font, dark mode support
  - `default.erb`: Inherits from base, adds header/footer/nav
  - `post.erb`: Blog post template with date, categories, title, optional image
  - `category.erb`: Category archive pages
- `src/_partials/`: Reusable ERB components
  - `shared/_header.erb`: Site header with navigation
  - `shared/_footer.erb`: Site footer
  - `_head.erb`: CSS includes
- `src/_data/`: Structured data files
  - `menu.yml`: Navigation menu items
  - `site_metadata.yml`: Site-wide metadata for SEO
- `src/category/`: Category landing pages (Markdown with layout frontmatter)

### Custom Helpers
Defined in `config/initializers.rb`:
- `featured_post`: Returns featured post for homepage (recent within 4 weeks, or daily rotation)
- `posts_by_year`: Groups posts by year for blog index page

### Styling
- Tailwind CSS 4 config in `frontend/styles/index.css` using CSS-native configuration:
  - `@theme` for custom font family (Inter var)
  - `@utility` for custom `prose-quoteless` variant
  - `@source` directives to scan ERB templates and Markdown
- Dark mode support throughout via Tailwind's `dark:` variant
- Custom syntax highlighting in `src/assets/css/syntax.css`

### Plugins
Configured in `config/initializers.rb`:
- `bridgetown-feed`: RSS feed generation at `/feed.xml`
- `bridgetown-seo-tag`: SEO meta tags via `<%= seo %>` helper

### Deployment
GitHub Actions workflow (`.github/workflows/bridgetown.yml`):
1. Sets up Ruby 3.4.7 and Node 22
2. Installs npm and bundle dependencies
3. Runs `bin/bridgetown deploy` (builds site)
4. Uploads `output/` directory as artifact
5. Deploys to GitHub Pages

Triggered on pushes to `main` branch or manual workflow dispatch.

## Template Syntax

### ERB Basics
```erb
<%# This is a comment %>
<%= output_value %>
<% ruby_logic_only %>

<%# Render a partial %>
<%= render "shared/header", page: resource %>

<%# Access resource data %>
<%= resource.data.title %>
<%= resource.date.strftime("%B %e, %Y") %>

<%# Access collections %>
<% collections.posts.resources.each do |post| %>
  <%= post.data.title %>
<% end %>

<%# Access site data %>
<%= site.data.menu.main %>
```

### Available Helpers
```erb
<%# URL helpers %>
<%= relative_url "/path" %>
<%= link_to "Text", resource %>

<%# Content helpers %>
<%= markdownify content %>
<%= seo %>
<%= feed_meta %>

<%# Custom helpers %>
<%= featured_post %>
<%= posts_by_year %>
```

## File Formatting Standards

Follow `.editorconfig` settings:
- LF line endings
- Final newline required
- UTF-8 encoding
- 2-space indentation for JavaScript, JSON, YAML, ERB

## Ruby and Node Versions
- Ruby: 3.4.7 (specified in `.ruby-version`)
- Node: Specified in `.nvmrc`
