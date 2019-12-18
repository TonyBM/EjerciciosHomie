Rails.application.routes.draw do
  get 'reports/info'
  get 'welcome/index'
  get :hello_world, to: 'hello_word#index'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
