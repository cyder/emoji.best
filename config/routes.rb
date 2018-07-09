Rails.application.routes.draw do
  root to: "app#index"

  post "oauth/callback", to: "oauths#callback"
  get "oauth/callback", to: "oauths#callback"
  get "oauth/:provider", to: "oauths#oauth", as: :auth_at_provider

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:create, :show] do
        collection do
          get "check", to: "user_sessions#check"
          post "sign_in", to: "user_sessions#create"
          delete "sign_out", to: "user_sessions#destroy"
        end
      end
      resources :search, only: [:index]
      resources :emojis, only: [:create, :show, :update, :destroy] do
        resources :tags, only: [:create, :destroy]
        collection do
          post "upload", to: :upload
        end
      end
      resources :download, only: [:index]
    end
  end
end
