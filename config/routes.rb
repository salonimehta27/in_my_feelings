Rails.application.routes.draw do
  
  resources :moods, only: [:index,:show]
  resources :chatrooms, only:[:index,:show,:create]
  resources :messages
  resources :users, only:[:index,:show,:destroy,:update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
