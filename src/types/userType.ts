export type UserContextType = {
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    bookings: any[];
  } | null;
  setUser: (user: any) => void;
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
};