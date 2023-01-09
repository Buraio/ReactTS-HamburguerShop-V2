export interface iContextChildrenProp {
  children: React.ReactNode;
}

export interface iUserContext {
  loginData: (data: iLoginFormData) => void;
  registerData: (data: iRegisterFormData) => void;
  dashboardLoading: boolean;
  user: null | iUser;
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

export interface iUser {
  email: string;
  name: string;
  id: number;
}

export interface iLoginRequest {
  accessToken: string;
  user: iUser;
}
