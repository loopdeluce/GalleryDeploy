import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import DefaultImageLandingPage from "./DefaultImageLandingPage";
import HeaderLandingPage from "./HeaderLandingPage";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();

  function handleNewUserClick() {
    history.push("/newUser");
  }

  return (
    <>
      <HeaderLandingPage />
      <DefaultImageLandingPage />

      <Switch>
        <Route exact path="/">
          <LoginForm handleClick={handleNewUserClick} />
        </Route>
        <Route path="/newUser">
          <NewUserForm />
        </Route>
      </Switch>
    </>
  );
}

export default LandingPage;
