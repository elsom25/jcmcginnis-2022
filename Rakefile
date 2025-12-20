# frozen_string_literal: true

require "bridgetown-core/rack/boot"

task default: :deploy

desc "Build the Bridgetown site for deployment"
task :deploy do
  ENV["BRIDGETOWN_ENV"] = "production"

  # Build CSS with Tailwind
  sh "npx @tailwindcss/cli -i frontend/styles/index.css -o src/assets/css/style.css --minify"

  # Build the site
  sh "bin/bridgetown build"
end

desc "Start the development server"
task :start do
  sh "bin/bridgetown start"
end
