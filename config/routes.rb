Rails.application.routes.draw do

  root to: 'home#index'
  get 'health', to: 'application#health'
  get 'about', to: 'about#index'
  get 'terms', to: 'terms#index'
  get 'privacy', to: 'terms#privacy'

  resources :leads, only: [:create]

  scope :module => 'buttercms' do
    get '/blog/rss' => 'feeds#rss', :format => 'rss', :as => :buttercms_blog_rss
    get '/blog/atom' => 'feeds#atom', :format => 'atom', :as => :buttercms_blog_atom
    get '/blog/sitemap.xml' => 'feeds#sitemap', :format => 'xml', :as => :buttercms_blog_sitemap

    get '/newsletters' => 'posts#index', :as => :buttercms_blog
    get '/newsletters/:slug' => 'posts#show', :as => :buttercms_post
  end
end
