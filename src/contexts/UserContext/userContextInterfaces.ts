export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  loginData: (data: iLoginFormData) => void;
}

export interface iLoginFormData {
  email: string;
  password: string;
}

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iUser {
  email: string;
  name: string;
  id: number;
}

export interface iLoginRequest {
  accessToken: string;
  user: iUser;
}