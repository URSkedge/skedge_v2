Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    get 'search', to: 'search#index'
    get 'departments', to: 'departments#index'
  end
end
