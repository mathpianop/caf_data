Rails.application.routes.draw do
  namespace :api do
    get 'parishes/index'
    get 'parishes/create'
    get 'parishes/show'
    get 'parishes/destroy'
    get 'contacts', to: "contacts#index"
    post 'contacts', to: "contacts#create"
    get 'contacts/:id', to: "contacts#show"
    delete 'contacts/:id', to: "contacts#destroy"

    get 'parishes', to: "parishes#index"
    post 'parishes', to: "parishes#create"
    get 'parishes/:id', to: "parishes#show"
    delete 'parishes/:id', to: "parishes#destroy"
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
