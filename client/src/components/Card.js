import React from "react";

function Card() {
  const cardFavorited = true;

  const favoriteButtonSyntax = cardFavorited ? "♥ Favorited" : "♡ Favorite";

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://www.artic.edu/iiif/2/ded2fc0d-564a-670a-178e-5acc0af5d823/full/843,/0/default.jpg"
        alt="Sunset in the mountains"
        // width={4}
      ></img>
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">Artist's Name</p>
      </div>
      <div className="px-6 pb-2 flex justify-end">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {favoriteButtonSyntax}
        </span>
      </div>
    </div>
  );
}

export default Card;
