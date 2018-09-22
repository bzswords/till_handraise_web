class LeadsController < ApplicationController

  def create
    lead = Lead.find_or_create_by(email: params[:email])

    if lead.valid?
      flash[:notice] = "Successfully signed up for the newsletter!"
    else
      flash[:alert] = "Something went wrong: #{lead.errors.to_a.join(', ')}"
    end

    redirect_to root_path
  end

end
