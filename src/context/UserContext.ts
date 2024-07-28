import { createContext } from "react";
import { UserContextType } from "../types/userType";

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  showLogin: false,
  setShowLogin: () => {}
});


export default UserContext;