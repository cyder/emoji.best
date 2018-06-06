Rails.application.routes.draw do
  root to: "sample#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :users, only: [:create] do
        post "sign_in", to: "user_sessions#create"
      end
      resources :search, only: [:index]
    end
  end
end
