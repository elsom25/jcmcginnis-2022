# frozen_string_literal: true

module Builders
  class Redirects < SiteBuilder
    def build
      generator do
        redirects = site.data.redirects || []

        redirects.each do |redirect|
          from_path = redirect["from"]
          to_path = redirect["to"]

          add_resource(:pages, "redirect-#{slugify(from_path)}.html") do
            layout(:redirect)
            permalink(from_path)
            redirect_to(to_path)
          end
        end
      end
    end

    private

    def slugify(path)
      path.to_s.gsub(%r{^/|/$}, "").tr("/", "-")
    end
  end
end
