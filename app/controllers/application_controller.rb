class ApplicationController < ActionController::Base
  before_action :set_header_template

  def health
    ActiveRecord::Base.establish_connection
    ActiveRecord::Base.connection

    if !ActiveRecord::Base.connected?
      render json: { error: 'Cannot establish database connection' }, status: 500
      return
    end

    render json: {}, status: 200
  end

  private

  def set_header_template
    @header_template_path = 'header/index'
  end

end
