Rails.application.routes.draw do
  namespace :api do
    resources :concerts
  end

  namespace :api do
    resources :venues
  end
end
