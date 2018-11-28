require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TillHandraiseWeb
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.mailchimp         = ActiveSupport::OrderedOptions.new
    config.mailchimp.api_key = ENV['MAILCHIMP_KEY'] #Rails.application.credentials.shared[:mailchimp][:key]
    config.mailchimp.list_id = "1f5cae62f7" #Rails.application.credentials[Rails.env.to_sym][:mailchimp][:list_id]

    config.subscribe_to_mailing_list = false
  end
end
