// import logo from "./logo.svg";
import "../App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import HomePage from "./HomePage";

// const showLandingPage = () => {
//   if (window.location.pathname === "/") return <LandingPage />;
// };

// const showLoginForm = (collection) => {
//   if (window.location.pathname === "/login")
//     return <LoginForm collection={collection} />;
// };
// const showUserForm = (collection) => {
//   if (window.location.pathname === "/newuser")
//     return <NewUserForm collection={collection} />;
// };
// const showHome = () => {
//   if (window.location.pathname === "/home") return <HomePage />;
// };
// const showGallery = (collection) => {
//   if (window.location.pathname === "/gallery")
//     return <Gallery collection={collection} />;
// };

// const showDiscover = (collection) => {
//   if (window.location.pathname === "/discover")
//     return <Discover collection={collection} />;
// };

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

  function handleLogin(user) {
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
      .then((newUser) => handleLogin(newUser));
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginForm
            existingUsers={allUsers}
            handleLogin={handleLogin}
            fetchUserFavoriteArtworks={fetchUserFavoriteArtworks}
          />
        </Route>
        <Route path="/signup">
          <NewUserForm existingUsers={allUsers} postNewUser={postNewUser} />
        </Route>
        <Route path="/home">
          <HomePage artCollection={artCollection} favorites={favorites} />
        </Route>
      </Switch>

      {/* <LandingPage />
      <HomePage /> */}
      {/* {showLandingPage()}
      {showLoginForm({
        allUsers,
        handleLogin,
        fetchUserFavoriteArtworks,
        handleLoadingFavorites,
        handleTester,
      })}
      {showUserForm({ allUsers, postNewUser })}
      {showHome()}
      {showGallery(favorites)}
      {showDiscover(artCollection)} */}
      {/* <ArtworkDetail /> */}
    </div>
  );
}

export default App;
