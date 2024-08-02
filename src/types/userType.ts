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

export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};