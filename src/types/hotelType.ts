export interface Hotel {
  id: number;
  name: string;
  image: string;
  address: string;
  cityId: number;
  rooms: Room[];
}

export interface Room {
  id: number;
  name: string;
  capacity: number;
  image: string;
  hotelId: number;
  bookings: Booking[];
}

export interface Booking {
  id: number;
  checkIn: string;
  checkOut: string;
  guestQuantity: number;
  roomId: number;
  userId: number;
}