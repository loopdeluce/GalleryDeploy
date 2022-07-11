class CreateArtworks < ActiveRecord::Migration
  def change
    create_table :artworks do |t|
      t.integer :key
      t.string :title
      t.string :artist
      t.string :img_link
    end
  end
end
