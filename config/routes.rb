Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :trails, only: [:index, :show, :create, :update, :destroy]
  # get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
