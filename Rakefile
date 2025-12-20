# frozen_string_literal: true

require "bridgetown-core/rack/boot"

task default: :deploy

desc "Build the Bridgetown site for deployment"
task :deploy do
  # Build CSS
  sh "npx @tailwindcss/cli -i frontend/styles/index.css -o src/assets/css/style.css --minify"

  # Build the site
  Bridgetown::Commands::Build.start
end
