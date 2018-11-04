class Buttercms::PostsController < Buttercms::BaseController
  helper_method :unique_posts

  def index
    @posts = ButterCMS::Post.all(:page => 1, :page_size => 4).to_a
    @featured = @posts.shift
  end

  def show
    @featured = ButterCMS::Post.find(params[:slug])
    @posts = ButterCMS::Post.all(:page => 1, :page_size => 4).to_a
  end

  private

  def unique_posts(featued, posts)
    posts.select do |post|
      post.title != featued.title
    end
  end
end
