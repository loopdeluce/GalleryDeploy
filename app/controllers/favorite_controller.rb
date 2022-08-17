require 'Pry'

class FavoriteController < ApplicationController
  
  post '/favorites' do
    favorite = Favorite.create(favorite_params)
    favorite.to_json
  end

  delete '/favorites/:id' do 
    favorite = Favorite.find(params[:id])
    favorite.destroy
    favorite.to_json
  end

  private

  def favorite_params
    allowed_params = %w(user_id artwork_id)
    params.select{|param, value| allowed_params.include?(param)}
  end

end