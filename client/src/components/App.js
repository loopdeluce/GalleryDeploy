// import logo from "./logo.svg";
import "../App.css";

import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import HomePage from "./HomePage";
// import Content from "./Content";
import Gallery from "./Gallery";
import Discover from "./Discover";
// import ArtworkDetail from "./ArtworkDetail";

// import HomePage from "./HomePage";

const showLandingPage = () => {
  if (window.location.pathname === "/") return <LandingPage />;
};

const showLoginForm = (collection) => {
  if (window.location.pathname === "/login")
    return <LoginForm collection={collection} />;
};
const showUserForm = (collection) => {
  if (window.location.pathname === "/signup")
    return <NewUserForm collection={collection} />;
};
const showHome = () => {
  if (window.location.pathname === "/home") return <HomePage />;
};
const showGallery = () => {
  if (window.location.pathname === "/gallery") return <Gallery />;
};

const showDiscover = (collection) => {
  if (window.location.pathname === "/discover")
    return <Discover collection={collection} />;
};

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
    console.log(user)
    console.log('Calling favorites...')
    getFavorites(user);
  }

  function getFavorites(authenticatedUser) {
    fetch(
      `http://127.0.0.1:4200/users/${authenticatedUser.id}?include_artworks`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.artworks);
        setFavorites(data.artworks);
      });
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
      {/* <LandingPage />
      <HomePage /> */}
      {showLandingPage()}
      {showLoginForm({ allUsers, handleLogin })}
      {showUserForm({ allUsers, postNewUser })}
      {showHome()}
      {showGallery(favorites)}
      {showDiscover(artCollection)}
      {/* <ArtworkDetail /> */}
    </div>
  );
}

export default App;
