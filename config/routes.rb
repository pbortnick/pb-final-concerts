Rails.application.routes.draw do
  namespace :api do
    resources :concerts
    resources :venues
  end
end
