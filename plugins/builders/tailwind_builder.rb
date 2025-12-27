module Builders
  class TailwindBuilder < Bridgetown::Builder
    def build
      hook :site, :pre_render, reloadable: false do |site|
        compile_tailwind(site)
      end
    end

    def compile_tailwind(site)
      input = site.in_root_dir("frontend/styles/index.css")
      output = site.in_source_dir("assets/css/style.css")

      cmd = ["npx", "@tailwindcss/cli", "-i", input, "-o", output]
      cmd << "--minify" if Bridgetown.env.production?

      Bridgetown.logger.info "Tailwind:", "Compiling CSS..."
      system(*cmd)
    end
  end
end
