EmberFlare::Application.routes.draw do
  root :to => "static#index"

  namespace :api do
    resources :entries, :only => [:index, :create]
    resource :session, :only => :create
  end

  post :session, :to => "session#create", :format => :json
  delete :session, :to => "session#destroy", :format => :json

  get "/*path" => "static#index"
end
