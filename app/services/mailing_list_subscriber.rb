class MailingListSubscriber
  attr_reader :email, :mailing_list

  def self.call(email:, mailing_list: MAILCHIMP_LIST_ID)
    MailingListSubscriber.new(
      email: email,
      mailing_list: mailing_list
    ).call
  end

  def initialize(email:, mailing_list: MAILCHIMP_LIST_ID)
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
    client.lists.subscribe(
      mailing_list,
      { "email" => email }
    )
  end

  private

  def client
    @client ||= Mailchimp::API.new(MAILCHIMP_API_KEY)
  end
end
