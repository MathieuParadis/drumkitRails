Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'event#index'
  resources :user, only: [:index]
  resources :city, only: [:index]
end
