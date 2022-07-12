import React from "react";
import SearchBar from "./SearchBar";
import HomeNav from "./HomeNav";
import Content from "./Content";

function HomePage() {
  return (
    <>
      <HomeNav />
      <SearchBar />
      <Content />
    </>
  );
}

export default HomePage;
