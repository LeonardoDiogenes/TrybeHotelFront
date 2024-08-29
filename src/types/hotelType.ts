import { BookingFormData } from "./bookingType";
import { Room, RoomResponse } from "./roomType";

export interface HotelType {
  id: number;
  name: string;
  image: string[];
  address: string;
  cityId: number;
  rooms: Room[];
}

export interface HotelResponse {
  hotelId: number;
  name: string;
  image: string[];
  address: string;
  cityId: number;
  cityName: string;
  state: string;
}

export interface HotelProps {
  data: HotelResponse | HotelsByGeoResponse;
}

export interface Hotel extends HotelType { };

export interface HotelsByGeoResponse extends HotelResponse {
  distance: number;
}

export type FilterType = 'hotel' | 'room';

export type HotelContextType = {
  hotels: Hotel[] | HotelsByGeoResponse[];
  setHotels: (hotels: any) => void;
  rooms: RoomResponse[];
  setRooms: (rooms: RoomResponse[]) => void;
  filterType: FilterType;
  setFilterType: (filterType: FilterType) => void;
  bookingData: BookingFormData,
  setBookingData: (bookingData: BookingFormData) => void;
};
