Rails.application.routes.draw do
  root 'pages#home'
  get '/admin', to: 'pages#admin', as: 'admin'
  post '/download_emails', to: 'pages#download_emails'

  resources :petitions
  resources :offline_petitions
end
