import { Hotel, HotelsByGeoResponse } from "./hotelType";

export type UserContextType = {
  user: {
    email: string;
    password: string;
    name: string;
  } | null;
  hotels: Hotel[] | HotelsByGeoResponse[];
  setUser: (user: any) => void;
  setHotels: (hotels: any) => void;
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
  showSignUp: boolean;
  setShowSignUp: (show: boolean) => void;
  isFetching: boolean;
  setIsFetching: (fetching: boolean) => void;
};
