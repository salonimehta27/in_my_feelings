Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  # resources :moods, only: [:index,:show]
  get "/moods", to: "moods#index"
  get "/moods/:id", to: "moods#show"

  resources :chatrooms, only:[:index,:show]
  resources :messages, only:[:index,:create,:update,:destroy]
  resources :users, only:[:index]
  
  get "/me", to: "users#show" 
  post '/signup', to: 'users#create'
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
