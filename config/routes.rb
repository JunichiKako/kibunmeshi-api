Rails.application.routes.draw do
  namespace :api do
    resources :recipes, only: [:index, :show] do
      collection do
        get 'search' 
      end
    end
    resources :categories, only: [:index, :show]

    # コンタクトフォームのエンドポイント
    resources :contacts, only: [:create]
  end
end
