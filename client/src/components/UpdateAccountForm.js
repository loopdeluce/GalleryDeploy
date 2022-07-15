import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function UpdateAccountForm({ authenticatedUser, updateAuthenticatedUser }) {
  const [formData, setFormData] = useState(authenticatedUser);
  const history = useHistory();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
  }

  function patchUserUpdate() {
    return fetch(`http://127.0.0.1:4200/users/${authenticatedUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => response.json());
  }

  function updateAccount(event) {
    event.preventDefault();
    patchUserUpdate().then((updatedUser) => {
      updateAuthenticatedUser(updatedUser);
      alert("Your account has been updated!");
    });
  }

  return (
    <div className="h-screen flex bg-grey-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Update your account
        </h1>

        <form onSubmit={updateAccount}>
          <div>
            {/* <label htmlFor="Field">First name</label> */}
            <input
              type="firstName"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="username"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              onClick={(e) => {}}
              className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Update Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAccountForm;
