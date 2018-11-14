class MailingListSubscriber
  attr_reader :email, :mailing_list

  def self.call(email:, mailing_list: Rails.configuration.mailchimp.list_id)
    MailingListSubscriber.new(
      email: email,
      mailing_list: mailing_list
    ).call
  end

  def initialize(email:, mailing_list: Rails.configuration.mailchimp.list_id)
    @email = email
    @mailing_list = mailing_list
  end

  def call
    result = true

    begin
      call!
    rescue Mailchimp::ListAlreadySubscribedError => e
      result = false
    end

    result
  end

  def call!
    subscribe
  end

  private

  def client
    @client ||= Mailchimp::API.new(Rails.configuration.mailchimp.api_key)
  end

  def subscribe
    if Rails.configuration.subscribe_to_mailing_list
      client.lists.subscribe(mailing_list, { 'email' => email }, nil, 'html', false, false, true, true)
    else
      Rails.logger.info "No subscriptions in #{Rails.env} environment"
    end
  end
end
