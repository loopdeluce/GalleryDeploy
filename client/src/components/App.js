// import logo from "./logo.svg";
import "../App.css";

import React from "react";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import HomePage from "./HomePage";
import Content from "./Content";
import Gallery from "./Gallery";
import Discover from "./Discover";
import ArtworkDetail from "./ArtworkDetail";

// import HomePage from "./HomePage";

// const showLandingPage = () => {
//   if (window.location.pathname === "/") return <LandingPage />;
// };

// const showLoginForm = () => {
//   if (window.location.pathname === "/login") return <LoginForm />;
// };
// const showUserForm = () => {
//   if (window.location.pathname === "/signup") return <NewUserForm />;
// };
// const showHome = () => {
//   if (window.location.pathname === "/home") return <HomePage />;
// };
// const showGallery = () => {
//   if (window.location.pathname === "/gallery") return <Gallery />;
// };

// const showDiscover = () => {
//   if (window.location.pathname === "/discover") return <Discover />;
// };

function App() {
  return (
    <div className="App">
      {/* <LandingPage />
      <HomePage /> */}
      {/* {showLandingPage()}
      {showLoginForm()}
      {showUserForm()}
      {showHome()}
      {showGallery()}
      {showDiscover()} */}
      <ArtworkDetail />
    </div>
  );
}

export default App;
