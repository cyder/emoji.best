Rails.application.routes.draw do
  root to: "sample#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :users, only: [:create]

      post "/users/sign_in", to: "user_sessions#create"
    end
  end
end
