Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :campaigns, only: [:index, :create, :show, :update, :destroy]
    resources :perks, only: [:index, :show, :create, :update, :destroy]
    resources :contributions, only: [:create, :show]
  end

  root 'static_pages#root'

end
