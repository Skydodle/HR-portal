export interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export interface LoginState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}
