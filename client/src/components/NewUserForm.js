import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function NewUserForm({ handleClick }) {
  const [firstNameField, setFirstNameField] = useState("");
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const { setAuthenicatedUser, user } = useContext(UserContext);

  function fetchUserData() {
    return fetch("http://127.0.0.1:9393/users").then((r) => r.json());
  }

  function postNewUser() {
    const newUser = {
      username: usernameField,
      first_name: firstNameField,
      password: passwordField,
    };

    return fetch("http://127.0.0.1:9393/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((r) => r.json());
  }

  function registerNewUser(e) {
    e.preventDefault();

    fetchUserData().then((appUserData) => {
      const existingUsername = appUserData.find(
        (existingUser) => existingUser.username === usernameField
      );
      if (existingUsername !== undefined) {
        alert(
          "Username already exists! Our usernames are case sensitive. Please try again!"
        );
      } else {
        postNewUser().then((newUser) => {
          setAuthenicatedUser(newUser);
          setUsernameField("");
          setPasswordField("");
          console.log("logged in");
          console.log(user);
          // Push to discover page?
        });
      }
    });
  }

  return (
    <div className="h-screen flex bg-grey-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Create an account 👾
        </h1>

        <form onSubmit={(e) => registerNewUser(e)}>
          <div>
            {/* <label htmlFor="Field">First name</label> */}
            <input
              type="firstName"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              id="firstName"
              placeholder="First name"
              onChange={(e) => {
                setFirstNameField(e.target.value);
                // console.log(e.target.value);
              }}
            />
          </div>
          <div>
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="username"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              id="username"
              placeholder="Username"
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
              placeholder="Password"
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
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewUserForm;
