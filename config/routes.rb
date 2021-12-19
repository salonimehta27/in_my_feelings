Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  resources :moods, only: [:index,:show]
  resources :chatrooms, only:[:index,:show,:create]
  resources :messages, only:[:index,:create,:update,:destroy]
  resources :users, only:[:index,:show,:destroy,:update,:create]

  get '/me',to: 'users#show'
  post '/signup', to: 'users#create'
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
