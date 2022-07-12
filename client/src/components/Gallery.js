import React from "react";
import Card from "./Card";
import HomeNav from "./HomeNav";

function Gallery() {
  return (
    <div>
      This is Gallery, just looks the same
      <HomeNav />
      <div className="flex flex-wrap gap-x-8 gap-y-6 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Gallery;
