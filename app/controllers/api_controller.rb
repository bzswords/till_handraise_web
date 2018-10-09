class ApiController < ActionController::API
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception unless Rails.env.test?

  rescue_from ActionController::InvalidAuthenticityToken do |e|
    Rails.logger.fatal "#{e.class.name} #{e.message} #{e.backtrace.join("\t\n")}"

    head :forbidden
  end
end
