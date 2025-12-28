# frozen_string_literal: true

Bridgetown.configure do
  init :"bridgetown-feed"
  init :"bridgetown-seo-tag"

  # Custom collections (Ruby DSL is preferred in Bridgetown 2.0)
  collections do
    talks do
      output true
      permalink "/talks/:slug/"
    end
  end
end

Bridgetown::RubyTemplateView::Helpers.class_eval do
  def featured_posts
    @featured_posts ||= site.collections.posts.resources
      .select { it.data.featured }
      .sort_by(&:date)
      .reverse
  end

  def featured_post
    return @featured_post if defined?(@featured_post)
    return @featured_post = nil if featured_posts.empty?

    recent = featured_posts.first
    four_weeks_ago = Time.now - (4 * 7 * 24 * 60 * 60)
    @featured_post = if recent && recent.date > four_weeks_ago
      recent
    else
      featured_posts[Date.today.yday % featured_posts.size]
    end
  end

  def posts_by_year
    site.collections.posts.resources.group_by { it.date.year }.sort.reverse.to_h
  end

  def category_url(category_name)
    "/category/#{category_name.downcase.gsub(/\s+/, "-")}/"
  end

  def active_nav_item?(item, current_page)
    current_page.relative_url == item.url ||
      current_page.data.nav_section == item.url ||
      (item.collection && current_page.respond_to?(:collection) && current_page.collection&.label == item.collection)
  end
end
