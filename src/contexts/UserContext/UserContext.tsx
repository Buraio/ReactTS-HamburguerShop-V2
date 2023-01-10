import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { burguerKenzieApi } from "../../services/api";
import {
  iLoginFormData,
  iLoginRequest,
  iRegisterFormData,
  iUserContext,
  iContextChildrenProp,
  iUser,
  iResponse,
} from "./userContextInterfaces";

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iContextChildrenProp) => {
  const [user, setUser] = useState<null | iUser>(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      setDashboardLoading(false);
      return;
    }

    const user = JSON.parse(localStorage.getItem("@user") || "");

    setUser(user);

    setDashboardLoading(false);
    navigate("/dashboard");
  }, []);

  const registerData: SubmitHandler<iRegisterFormData> = (data) => {
    const userRegisterWithApi = async () => {
      try {
        await burguerKenzieApi.post("/users", data);

        toast.success(`Conta criada! redirecionando...`);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        console.error(error);
        const currentError = error as AxiosError<iResponse>;
        toast.error(`${currentError.response?.data}`);
      }
    };

    userRegisterWithApi();
  };

  const loginData: SubmitHandler<iLoginFormData> = (data) => {
    const userLoginWithApi = async () => {
      try {
        const request = await burguerKenzieApi.post<iLoginRequest>(
          "/login",
          data
        );

        localStorage.setItem("@token", request.data.accessToken);

        localStorage.setItem("@user", JSON.stringify(request.data.user));
        setUser(request.data.user);

        toast.success(`Seja bem vindo, ${request.data.user.name}`);

        navigate("/dashboard");
      } catch (error) {
        console.error(error);
        toast.error(`Email ou senha incorreta`);
      }
    };

    userLoginWithApi();
  };

  return (
    <UserContext.Provider
      value={{ loginData, registerData, dashboardLoading, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
