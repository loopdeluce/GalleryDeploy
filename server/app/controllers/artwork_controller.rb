class ArtworkController < ApplicationController

  get "/artworks" do
    Artwork.all.to_json
  end
  
end