class ApplicationController < ActionController::Base

  def health
    ActiveRecord::Base.establish_connection
    ActiveRecord::Base.connection

    if !ActiveRecord::Base.connected?
      render json: { error: 'Cannot establish database connection' }, status: 500
      return
    end

    render json: {}, status: 200
  end

end
