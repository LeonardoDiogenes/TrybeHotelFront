import { createContext } from "react";
import { UserContextType } from "../types/userType";

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  showLogin: false,
  setShowLogin: () => {},
  showSignUp: false,
  setShowSignUp: () => {},
});


export default UserContext;