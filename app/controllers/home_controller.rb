class HomeController < ApplicationController
  before_action :set_header_template

  private

  def set_header_template
    @header_template_path = 'home/page_header'
  end
end
