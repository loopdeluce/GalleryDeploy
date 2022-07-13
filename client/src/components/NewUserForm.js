import React, { useState } from "react";

function NewUserForm({ existingUsers, postNewUser }) {
  const [firstNameField, setFirstNameField] = useState("");
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  function registerNewUser(e) {
    e.preventDefault();

    const existingUsername = existingUsers.find(
      (existingUser) => existingUser.username === usernameField
    );
    if (existingUsername !== undefined) {
      alert(
        "Username already exists! Our usernames are case sensitive. Please try again!"
      );
    } else {
      const newUser = {
        username: usernameField,
        first_name: firstNameField,
        password: passwordField,
      };
      postNewUser(newUser);
      setUsernameField("");
      setPasswordField("");
      console.log("logged in");
      // Push to discover page?
    }
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
