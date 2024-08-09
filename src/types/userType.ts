export type UserContextType = {
  user: {
    email: string;
    password: string;
    name: string;
  } | null;
  setUser: (user: any) => void;
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
  showSignUp: boolean;
  setShowSignUp: (show: boolean) => void;
  isFetching: boolean;
  setIsFetching: (fetching: boolean) => void;
};
