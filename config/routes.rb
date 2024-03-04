Rails.application.routes.draw do
  namespace :api do
    resources :recipes, only: [:index, :show] do
      collection do
        get 'search' # /api/recipes/searchに対応
      end
    end
    resources :categories, only: [:index, :show]
  end

  # 既存のヘルスチェックのルート
  get "up" => "rails/health#show", as: :rails_health_check

  # ここに他のルートを追加
end
