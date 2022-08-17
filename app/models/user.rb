class User < ActiveRecord::Base
  has_many :favorites
  has_many :artworks, through: :favorites

  def remove_favorites(artwork_id)
    self.favorites.filter{|favorite| favorite.artwork_id == artwork_id}.each(&:destroy)
  end
end