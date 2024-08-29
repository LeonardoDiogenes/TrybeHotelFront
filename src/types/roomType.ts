import { Booking } from "./bookingType";
import { HotelResponse } from "./hotelType";

export interface Room {
  id: number;
  name: string;
  capacity: number;
  image: string[];
  hotelId: number;
  bookings: Booking[];
}

export interface RoomResponse {
  roomId: number;
  name: string;
  capacity: number;
  image: string[];
  hotel: HotelResponse;
}

export interface RoomProps {
  data: RoomResponse;
}
