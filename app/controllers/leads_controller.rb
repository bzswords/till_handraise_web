class LeadsController < ApiController

  after_action :subscribe_to_mailing_list, only: :create

  def create
    lead = Lead.find_or_create_by(email: params[:email])

    if lead.valid?
      render json: { id: lead.id }, status: :created
      return
    else
      render json: { errors: lead.errors.full_messages.join(', ') }, status: :bad_request
      return
    end
  end

  private

  def subscribe_to_mailing_list
    MailingListSubscriber.call(email: params[:email])
  end

end
