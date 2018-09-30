class LeadsController < ApplicationController

  after_action :subscribe_to_mailing_list, only: :create

  def create
    lead = Lead.find_or_create_by(email: params[:email])

    if lead.valid?
      flash[:notice] = "Successfully signed up for the newsletter!"
    else
      flash[:alert] = "Something went wrong: #{lead.errors.to_a.join(', ')}"
    end

    redirect_to root_path
  end

  private

  def subscribe_to_mailing_list
    MailingListSubscriber.call(email: params[:email])
  end

end
