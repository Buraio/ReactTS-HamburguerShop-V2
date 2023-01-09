import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate } from "react-router-dom";
import { burguerKenzieApi } from "../../services/api";
import {
  iLoginFormData,
  iLoginRequest,
  iRegisterFormData,
  iUserContext,
  iContextChildrenProp,
  iUser,
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
    console.log(data);

    const userRegisterWithApi = async () => {
      try {
        await burguerKenzieApi.post("/users", data);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    };

    userRegisterWithApi();
  };

  const loginData: SubmitHandler<iLoginFormData> = (data) => {
    console.log(data);

    const userLoginWithApi = async () => {
      try {
        const request = await burguerKenzieApi.post<iLoginRequest>(
          "/login",
          data
        );

        console.log(request.data);

        localStorage.setItem("@token", request.data.accessToken);

        localStorage.setItem("@user", JSON.stringify(request.data.user));
        setUser(request.data.user);

        navigate("/dashboard");
      } catch (error) {
        console.error(error);
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
