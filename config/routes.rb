Rails.application.routes.draw do
  post "oauth/callback", to: "oauths#callback"
  get "oauth/callback", to: "oauths#callback"
  get "oauth/:provider", to: "oauths#oauth", as: :auth_at_provider

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :users, only: [:create, :update, :destroy] do
        get "authentication", to: "user_sessions#authentication"
        post "sign_in", to: "user_sessions#create"
        delete "sign_out", to: "user_sessions#destroy"
      end
      resources :users, only: :show
      resources :search, only: [:index]
      resources :emojis, only: [:create, :show, :update, :destroy] do
        resources :tags, only: [:create, :destroy]
        get "download", to: "download#index"
        collection do
          post "upload", to: :upload
        end
      end
      get "download", to: "download#zip"
    end
    root to: "error#render_404"
    get "/*path", to: "error#render_404"
  end

  root to: "app#index"
  get "/*path", to: "app#index"
end
