# frozen_string_literal: true

Bridgetown.configure do |config|
  # Initialize plugins
  init :"bridgetown-feed"
  init :"bridgetown-seo-tag"
end

# Custom template helpers
Bridgetown::RubyTemplateView::Helpers.class_eval do
  def featured_post
    home_posts = site.collections.posts.resources.select { |p| p.data.home }
    return nil if home_posts.empty?

    recent = home_posts.first

    four_weeks_ago = Time.now - (4 * 7 * 24 * 60 * 60)
    if recent && recent.date > four_weeks_ago
      recent
    else
      home_posts[Date.today.yday % home_posts.size]
    end
  end

  def posts_by_year
    site.collections.posts.resources.group_by { |p| p.date.year }.sort.reverse.to_h
  end

  # Look up category page by title and return its URL (single source of truth)
  # Falls back to a slugified URL if no matching page is found
  def category_url(category_name)
    page = site.collections.pages.resources.find { |p| p.data.title == category_name }
    page&.relative_url || "/category/#{category_name.downcase.gsub(/\s+/, '-')}/"
  end
end
