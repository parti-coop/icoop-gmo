Rails.application.routes.draw do
  root 'pages#home'
  get '/admin', to: 'pages#admin', as: 'admin'

  resources :petitions
  resources :offline_petitions
end
