export interface Booking {
  id: number;
  checkIn: string;
  checkOut: string;
  guestQuantity: number;
  roomId: number;
  userId: number;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guestQuantity: number;
}

export interface BookingDtoInsert extends BookingFormData {
  roomId: number;
}