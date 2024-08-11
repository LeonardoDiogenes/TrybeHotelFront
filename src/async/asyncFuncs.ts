import { HotelsByGeoResponse } from "../types/hotelType";
import { RoomResponse } from "../types/roomType";

interface LoginResponse {
  token: string;
  user: {
    userId: number;
    name: string;
    email: string;
    userType: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('https://localhost:5001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Falha no login');
  }

  const data = await response.json();
  console.log(data);
  return data;
};

export const signUp = async (name: string, email: string, password: string): Promise<void> => {
  const response = await fetch('https://localhost:5001/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
    });

  if (response.status !== 201) {
    throw new Error('Falha no cadastro');
  }

  const data = await response.json();
  console.log(data);
};

export const getHotelsByGeoLocation = async (location: string): Promise<HotelsByGeoResponse[]> => {
  const response = await fetch(`https://localhost:5001/geo/address`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ address: location })
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar hotéis');
  }

  const data = await response.json();
  console.log(data);
  return data;
};

export const getAllRooms = async (): Promise<RoomResponse[]> => {
  const response = await fetch('https://localhost:5001/room');

  if (!response.ok) {
    throw new Error('Falha ao buscar quartos');
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export const getAllHotels = async (): Promise<HotelsByGeoResponse[]> => {
  const response = await fetch('https://localhost:5001/hotel');

  if (!response.ok) {
    throw new Error('Falha ao buscar hotéis');
  }

  const data = await response.json();
  console.log(data);
  return data;
};


