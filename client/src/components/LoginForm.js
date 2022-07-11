import React from "react";

function LoginForm({ handleClick }) {
  return (
    <>
      <h1>Login Form</h1>
      <button onClick={handleClick}>Create New Account</button>
    </>
  );
}

export default LoginForm;
