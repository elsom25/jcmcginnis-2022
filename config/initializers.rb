# frozen_string_literal: true

Bridgetown.configure do |config|
  init :"bridgetown-feed"
  init :"bridgetown-seo-tag"
end

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

  def category_url(category_name)
    page = site.collections.pages.resources.find { |p| p.data.title == category_name }
    page&.relative_url || "/category/#{category_name.downcase.gsub(/\s+/, '-')}/"
  end
end
