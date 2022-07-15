import Discover from "./Discover";
import { Route, Switch } from "react-router-dom";
import ArtworkDetail from "./ArtworkDetail";
import Gallery from "./Gallery";
import { useState } from "react";
import UpdateAccountForm from "./UpdateAccountForm";

function Content({
  artCollection,
  favorites,
  authenticatedUser,
  updateAuthenticatedUser,
  addToFavorites
}) {
  const [artworkDetails, setArtworkDetails] = useState({});

  function getArtworkDetails(id) {
    return fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
      .then((r) => r.json())
      .then((artworkDetails) => {
        setArtworkDetails(artworkDetails.data);
      });
  }

  return (
    <Switch>
      <Route path="/home/discover">
        <Discover
          artCollection={artCollection}
          addToFavorites={addToFavorites}
          favorites={favorites}
        />
      </Route>
      <Route path="/home/details">
        <ArtworkDetail artworkDetails={artworkDetails} />
      </Route>
      <Route path="/home/gallery">
        <Gallery favorites={favorites} addToFavorites={addToFavorites} getArtworkDetails={getArtworkDetails} />
      </Route>
      <Route path="/home/updateaccount">
        <UpdateAccountForm
          authenticatedUser={authenticatedUser}
          updateAuthenticatedUser={updateAuthenticatedUser}
        />
      </Route>
    </Switch>
  );
}

export default Content;
