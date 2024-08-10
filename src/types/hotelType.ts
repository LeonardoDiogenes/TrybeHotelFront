import { Room } from "./roomType";

export interface HotelType {
  id: number;
  name: string;
  image: string;
  address: string;
  cityId: number;
  rooms: Room[];
}

export interface HotelResponse {
  hotelId: number;
  name: string;
  image: string;
  address: string;
  cityId: number;
  cityName: string;
  state: string;
}

export interface Hotel extends HotelType { };

export interface HotelsByGeoResponse extends HotelType {
  distance: number;
}

export type FilterType = 'hotel' | 'room';

export type HotelContextType = {
  hotels: Hotel[] | HotelsByGeoResponse[];
  setHotels: (hotels: any) => void;
  filterType: FilterType;
  setFilterType: (filterType: FilterType) => void;
};
