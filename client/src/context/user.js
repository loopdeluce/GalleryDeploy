import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function setAuthenicatedUser(authenticatedUser) {
    setUser(authenticatedUser);
  }

  const value = {
    user,
    setAuthenicatedUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
