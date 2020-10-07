Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  resources :users, only: [:create, :new]
  resources :petstores
  resources :petscategories
  resources :petinfos

  resources :tests
  
 
  post 'sessions/create'
  get 'sessions/destroy'
  get 'sessions/user_present'

  get 'application/current_user'
  # resource :application

  get '*path', to: 'pages#index', via: :all
end
