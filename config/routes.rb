Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:create, :show] do
        collection do
          post "sign_in", to: "user_sessions#create"
          delete "sign_out", to: "user_sessions#destroy"
        end
      end
      resources :search, only: [:index]
      resources :emojis, only: [:create] do
        resources :tags, only: [:create, :destroy]
      end
      resources :download, only: [:index]
    end
    root to: "error#render_404"
    get "/*path", to: "error#render_404"
  end

  root to: "app#index"
  get "/*path", to: "app#index"
end
