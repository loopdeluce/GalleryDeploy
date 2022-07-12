// import logo from "./logo.svg";
import "../App.css";

import React from "react";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
// import HomePage from "./HomePage";

const showLandingPage = () => {
  if (window.location.pathname === "/") return <LandingPage />;
};

const showLoginForm = () => {
  if (window.location.pathname === "/login") return <LoginForm />;
};
const showUserForm = () => {
  if (window.location.pathname === "/signup") return <NewUserForm />;
};

function App() {
  return (
    <div className="App">
      {/* <LandingPage />
      <HomePage /> */}
      {showLandingPage()}
      {showLoginForm()}
      {showUserForm()}
    </div>
  );
}

export default App;
