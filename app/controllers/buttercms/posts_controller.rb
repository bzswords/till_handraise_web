class Buttercms::PostsController < Buttercms::BaseController
  def index
    @posts = ButterCMS::Post.all(:page => 1, :page_size => 4)
  end

  def show
    @post = ButterCMS::Post.find(params[:slug])
  end
end