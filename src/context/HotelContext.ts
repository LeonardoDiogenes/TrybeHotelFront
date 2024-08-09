import { createContext } from "react";
import { HotelContextType } from "../types/hotelType";

const HotelContext = createContext<HotelContextType>({
  hotels: [],
  setHotels: () => {},
  filterType: 'hotel',
  setFilterType: () => {}
});

export default HotelContext;