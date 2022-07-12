import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function LoginForm() {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const { setAuthenicatedUser } = useContext(UserContext);

  function fetchUserData() {
    return fetch("http://127.0.0.1:9393/users").then((r) => r.json());
  }

  function handleLogin(e) {
    e.preventDefault();

    fetchUserData().then((appUserData) => {
      const authenticatedUser = appUserData.find(
        (existingUser) =>
          (existingUser.username === usernameField) &
          (existingUser.password === passwordField)
      );
      if (authenticatedUser !== undefined) {
        setAuthenicatedUser(authenticatedUser);
        setUsernameField("");
        setPasswordField("");
        console.log("logged in:", authenticatedUser);
        // Push to discover page?
      } else {
        alert(
          "Incorrect username and password combination! Our usernames and passwords are case sensitive. Please try again!"
        );
      }
    });
  }

  return (
    <div className="h-screen flex bg-grey-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="username"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              id="username"
              placeholder="Your Username"
              onChange={(e) => {
                setUsernameField(e.target.value);
                // console.log(e.target.value);
              }}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              id="password"
              placeholder="Your Password"
              onChange={(e) => {
                setPasswordField(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              onClick={(e) => {
                console.log("please");
              }}
              className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
