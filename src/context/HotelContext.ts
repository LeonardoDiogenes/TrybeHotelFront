import { createContext } from "react";
import { HotelContextType } from "../types/hotelType";

const HotelContext = createContext<HotelContextType>({
  hotels: [],
  setHotels: () => {},
  rooms: [],
  setRooms: () => {},
  filterType: 'hotel',
  setFilterType: () => {},
  bookingData: {
    checkIn: "",
    checkOut: "",
    guestQuant: 0,
  },
  setBookingData: () => {}
});

export default HotelContext;