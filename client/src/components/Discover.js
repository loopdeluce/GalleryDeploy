import React, { useState, useEffect } from "react";
import Card from "./Card";

function Discover({ artCollection, getArtworkDetails }) {
  let deck = artCollection.map((piece) => {
    return (
      <Card
        key={piece.id}
        piece={piece}
        getArtworkDetails={getArtworkDetails}
      />
    );
  });
  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-6 justify-center">
        {deck}
      </div>
    </div>
  );
}

export default Discover;
