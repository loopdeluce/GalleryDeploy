import React, { useState, useEffect } from "react";
import Card from "./Card";
import HomeNav from "./HomeNav";

function Discover() {
  const [artCollection, setArtCollection] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4200/artworks")
      .then((response) => response.json())
      .then((data) => {
        setArtCollection(data);
      });
  }, []);
  let deck = artCollection.map((piece) => {
    return <Card key={piece.id} piece={piece} />;
  });
  return (
    <div>
      <HomeNav />
      <div className="flex flex-wrap gap-x-8 gap-y-6 justify-center">
        {deck}
      </div>
    </div>
  );
}

export default Discover;
