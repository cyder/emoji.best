Rails.application.routes.draw do
  root to: "sample#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :users, only: [:create]

      namespace :users do
        post :sign_in
      end
    end
  end
end
