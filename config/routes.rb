Rails.application.routes.draw do
  root to: "app#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :users, only: [:create] do
        get "profile", to: "users#profile"
        post "sign_in", to: "user_sessions#create"
        delete "sign_out", to: "user_sessions#destroy"
      end
      resources :users, only: [:show]
      resources :search, only: [:index]
      resources :emojis, only: [:create]
    end
  end
end
