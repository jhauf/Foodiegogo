Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :campaigns, only: [:index, :create, :show, :update, :destroy] do
      resources :perks, only: [:index]
    end

    resources :campaigns do
      resources :contributions, only: [:index]
    end
    resources :perks, only: [:show, :create, :update, :destroy]
    resources :contributions, only: [:create, :show, :index]
  end

  root 'static_pages#root'

end
