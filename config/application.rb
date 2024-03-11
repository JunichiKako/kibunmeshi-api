require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module KibunmeshiApi
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1

    # CORS設定
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3001' # Next.jsのサーバーのオリジンを許可
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          credentials: false
      end
    end

    # その他の設定...

    config.api_only = true
  end
end
