ENV['SINATRA_ENV'] ||= "development"

require 'bundler/setup'
Bundler.require(:default, ENV['SINATRA_ENV'])

ActiveRecord::Base.establish_connection(
  :adapter  =>  'postgresql',
  :database => 'Gallery_production',
  :encoding => 'utf8'
)


require './app/controllers/application_controller'
require_all 'app'
