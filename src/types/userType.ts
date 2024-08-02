export type UserContextType = {
  user: {
    email: string;
    password: string;
  } | null;
  setUser: (user: any) => void;
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
  showSignUp: boolean;
  setShowSignUp: (show: boolean) => void;
};
