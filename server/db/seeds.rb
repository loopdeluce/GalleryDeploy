require "net/http"
require "uri"
require "json"
require "sqlite3"

puts "Deleting old data..."
Artwork.destroy_all



amino = Array(1..8000)

def the_method(arr)
  arr.each_with_index do |artwork, index|
    uri = URI.parse("https://api.artic.edu/api/v1/artworks/#{artwork}")
    response = Net::HTTP.get_response(uri)
    data = JSON.parse(response.body)
    insert(data, index)
  end
end

def insert(data, index)
  if data["status"]
    puts "Status 404"
  else
    # title = data["data"]["title"]
    # puts title
    pp index
    # pp data["data"]["title"]
    # fixed = index + 1

    key = data["data"]["id"]
    title = data["data"]["title"]
    artist = data["data"]["artist_title"]
    img_link = data["data"]["image_id"]

    Artwork.create(key: key, title: title, artist: artist, img_link: img_link)

    # db = SQLite3::Database.open "table"
    # db.execute "INSERT INTO artworks VALUES (#{index}, #{key}, '#{title}', '#{artist}', '#{img_link}')"
  end
end

the_method(amino)
