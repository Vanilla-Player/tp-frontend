import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export const UserProvider = ({ children }) => {
  const JWT = require("jsonwebtoken");
  
  const getUserFromStorage = () => {
    const userCookie = Cookies.get("User");
    if (userCookie) {
      const decodeJWT = JWT.decode(userCookie);
      return decodeJWT.user;
    }
    return null;
  };

  const [user, setUser] = useState(getUserFromStorage());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
