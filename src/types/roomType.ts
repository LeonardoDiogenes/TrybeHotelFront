import { Booking } from "./bookingType";

export interface Room {
  id: number;
  name: string;
  capacity: number;
  image: string;
  hotelId: number;
  bookings: Booking[];
}
