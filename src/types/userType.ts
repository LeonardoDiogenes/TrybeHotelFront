export type UserContextType = {
  newUser: {
    id: number;
    name: string;
    email: string;
    password: string;
    bookings: any[];
  } | null;
  user: {
    email: string;
    password: string;
  } | null;
  setUser: (user: any) => void;
  setNewUser: (user: any) => void;
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
  showSignUp: boolean;
  setShowSignUp: (show: boolean) => void;
};