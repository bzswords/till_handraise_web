class Buttercms::BaseController < ActionController::Base
  before_action :set_header_template

  # You can of course change this layout to your main application layout
  # to have your blog match the rest of your site.
  layout 'application'

  private

  def set_header_template
    @header_template_path = 'header/index'
  end
end
