class Artwork < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :artworks
end
