Rails.application.routes.draw do
  root to: "sample#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :users, only: [:create]
    end
  end
end
