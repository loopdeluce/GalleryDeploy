import React from "react";
import HomeNav from "./HomeNav";
import Content from "./Content";
import SearchBar from "./SearchBar";

function HomePage({
  artCollection,
  favorites,
  authenticatedUser,
  updateAuthenticatedUser,
}) {
  return (
    <>
      <HomeNav handleLogout={updateAuthenticatedUser} />
      <SearchBar />
      <Content
        artCollection={artCollection}
        favorites={favorites}
        authenticatedUser={authenticatedUser}
        updateAuthenticatedUser={updateAuthenticatedUser}
      />
    </>
  );
}

export default HomePage;
