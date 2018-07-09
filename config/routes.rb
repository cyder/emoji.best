Rails.application.routes.draw do
  root to: "app#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :users, only: [:create, :update, :destroy] do
        post "sign_in", to: "user_sessions#create"
        delete "sign_out", to: "user_sessions#destroy"
      end
      resources :users, only: :show
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
