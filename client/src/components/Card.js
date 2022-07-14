import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Card({ piece, getArtworkDetails }) {
  const [cardFavorited, setCardFavorited] = useState(false);
  const history = useHistory();

  const { title, img_link, artist, key } = piece;
  const url = `https://www.artic.edu/iiif/2/${img_link}/full/843,/0/default.jpg`;
  const favoriteButtonSyntax = cardFavorited ? "♥ Favorited" : "♡ Favorite";

  function showArtworkDetails(event) {
    if (event.target.innerText !== favoriteButtonSyntax) {
      getArtworkDetails(key).then(() => history.push("/home/details"));
    }
  }

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg"
      onClick={showArtworkDetails}
    >
      <img
        className="w-full"
        src={url}
        alt="Sunset in the mountains"
        // width={4}
      ></img>
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {artist != null ? artist : "Unknown"}
        </p>
      </div>
      <div
        onClick={(event) => {
          setCardFavorited(!cardFavorited);
        }}
        className="px-6 pb-2 flex justify-end"
        id="favorite"
      >
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2 focus:outline-none hover:bg-gray-300">
          {favoriteButtonSyntax}
        </span>
      </div>
    </div>
  );
}

export default Card;
