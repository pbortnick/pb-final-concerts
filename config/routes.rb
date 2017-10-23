Rails.application.routes.draw do
  namespace :api do
    resources :concerts, except: [:new, :edit]
  end

  namespace :api do
    resources :venues
  end
end
