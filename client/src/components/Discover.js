import React, { useState, useEffect } from "react";
import Card from "./Card";

function Discover({
  artCollection,
  getArtworkDetails,
  addToFavorites,
  favorites,
}) {
  const artToFetch = artCollection.slice(0, 50);
  let deck = artToFetch.map((piece) => {
    return (
      // <div className="">
      <Card
        key={piece.id}
        piece={piece}
        getArtworkDetails={getArtworkDetails}
        addToFavorites={addToFavorites}
        favorites={favorites}
      />
      // </div>
    );
  });
  return (
    <div>
      {/* <div className="flex flex-wrap  gap-x-8 gap-y-6 content-start justify-center"> */}
      <div className="wrapper">
        {deck}
      </div>
    </div>
  );
}

export default Discover;

// items-start	align-items: flex-start;
// items-end	align-items: flex-end;
// items-center	align-items: center;
// items-baseline	align-items: baseline;
// items-stretch	align-items: stretch;
