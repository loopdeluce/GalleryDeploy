import React, { useState, useEffect } from "react";
import Card from "./Card";
import HomeNav from "./HomeNav";

function Discover({ collection }) {
  let deck = collection.map((piece) => {
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
