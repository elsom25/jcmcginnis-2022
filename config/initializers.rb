# frozen_string_literal: true

Bridgetown.configure do
  init :"bridgetown-feed"
  init :"bridgetown-seo-tag"

  # Custom collections (Ruby DSL is preferred in Bridgetown 2.0)
  collections do
    posts do
      output true
      permalink "/blog/:title/"
    end
    talks do
      output true
      permalink "/talks/:year/:slug/"
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

  def featured_talks
    @featured_talks ||= site.collections.talks.resources
      .select { it.data.featured }
      .sort_by { -it.data.year }
  end

  def featured_talk
    return @featured_talk if defined?(@featured_talk)
    return @featured_talk = nil if featured_talks.empty?

    # Rotate through featured talks based on day of year
    @featured_talk = featured_talks[Date.today.yday % featured_talks.size]
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

  # ════════════════════════════════════════════════════════════════════════════
  # PARTIAL CONTRACT HELPER
  # ════════════════════════════════════════════════════════════════════════════
  #
  # Validates partial parameters via a declarative contract with dev logging.
  #
  # @param b [Binding] Caller's binding
  # @param schema [Hash] Parameter specs (see examples)
  # @return [Struct] Validated params accessible as p.name
  #
  # @example
  #   p = contract(binding,
  #     color: %w[brand accent],           # enum, first is default
  #     bold:  false,                       # boolean
  #     href:  nil                          # optional
  #   )
  #
  def contract(b, schema)
    # Capture caller stack once (only parsed on error)
    call_stack = caller

    result = schema.map do |param, spec|
      # Phase 1: Normalize spec to common structure
      normalized = normalize_spec(spec)

      # Phase 2: Extract and validate
      value = b.local_variable_defined?(param) ? b.local_variable_get(param) : nil
      validated = validate_param(call_stack, param, value, normalized)

      [param, validated]
    end.to_h

    Struct.new(*result.keys).new(*result.values)
  end

  private

  def normalize_spec(spec)
    case spec
    when Array
      { type: :enum, allowed: spec, default: spec.first }
    when Hash
      { type: :enum, allowed: spec[:allowed], default: spec.key?(:default) ? spec[:default] : spec[:allowed].first }
    when true, false
      { type: :bool, default: spec }
    else
      { type: :optional, default: nil }
    end
  end

  def validate_param(call_stack, param, value, spec)
    case spec[:type]
    when :enum
      return spec[:default] if value.nil?
      return value if spec[:allowed].include?(value)

      log_validation_error(call_stack, param, value, spec)
      spec[:default]

    when :bool
      value == true

    when :optional
      value
    end
  end

  def log_validation_error(call_stack, param, value, spec)
    return unless Bridgetown.env.development?

    # Only parse call stack when we need to log an error
    partial = call_stack
      .find { it.include?("/_partials/") }
      &.then { it[%r{_partials/(.+?\.erb)}, 1] } || "unknown partial"

    warn("\e[33m[#{partial}]\e[0m #{param}: \e[31m#{value.inspect}\e[0m is invalid")
    warn("  Allowed: #{spec[:allowed].join(" | ")}")
    warn("  Using: #{spec[:default]}")
  end
end
