// import logo from "./logo.svg";
import "../App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [artCollection, setArtCollection] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4200//users")
      .then((r) => r.json())
      .then((allUserData) => setAllUsers(allUserData));

    fetch("http://127.0.0.1:4200/artworks")
      .then((response) => response.json())
      .then((data) => {
        setArtCollection(data);
      });
  }, []);

  function updateAuthenticatedUser(user) {
    setAuthenticatedUser(user);
  }

  function fetchUserFavoriteArtworks(authenticatedUser) {
    return fetch(
      `http://127.0.0.1:4200/users/${authenticatedUser.id}?include_artworks`
    )
      .then((response) => response.json())
      .then((userData) => setFavorites(userData.artworks));
  }

  function postNewUser(newUser) {
    fetch("http://127.0.0.1:4200/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((newUser) => updateAuthenticatedUser(newUser));
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <HomePage
            artCollection={artCollection}
            favorites={favorites}
            authenticatedUser={authenticatedUser}
            updateAuthenticatedUser={updateAuthenticatedUser}
          />
        </Route>
        <Route path="/">
          <LandingPage
            existingUsers={allUsers}
            handleLogin={updateAuthenticatedUser}
            fetchUserFavoriteArtworks={fetchUserFavoriteArtworks}
            postNewUser={postNewUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
