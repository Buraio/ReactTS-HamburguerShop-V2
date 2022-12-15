export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  loginData: (data: iLoginFormData) => void;
}

export interface iLoginFormData {
  name: string;
  password: string;
}

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
