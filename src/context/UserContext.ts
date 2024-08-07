import { createContext } from "react";
import { UserContextType } from "../types/userType";

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  hotels: [],
  setHotels: () => {},
  showLogin: false,
  setShowLogin: () => {},
  showSignUp: false,
  setShowSignUp: () => {},
  isFetching: false,
  setIsFetching: () => {},
});


export default UserContext;