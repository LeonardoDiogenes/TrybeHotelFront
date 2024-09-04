import { HotelResponse } from "./hotelType";
import { Room, RoomResponse } from "./roomType";

export interface Booking {
  id: number;
  checkIn: string;
  checkOut: string;
  guestQuant: number;
  room: RoomResponse;
  userId: number;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guestQuant: number;
}

export interface BookingDtoInsert extends BookingFormData {
  roomId: number;
}

export interface BookingResponse {
  guestName: string;
  bookingId: number;
  checkin: string;
  checkout: string;
  guestQuant: number;
  room: RoomResponse;
  image: string[];
}
