import { createContext } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate } from "react-router-dom";
import { burguerKenzieApi } from "../../services/api";
import {
  iLoginFormData,
  iLoginRequest,
  iRegisterFormData,
  iUserContext,
  iContextChildrenProp,
} from "./userContextInterfaces";

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iContextChildrenProp) => {
  const navigate = useNavigate();

  const registerData: SubmitHandler<iRegisterFormData> = (data) => {
    const userRegisterWithApi = async () => {
      try {
        const request = await burguerKenzieApi.post("/users", data);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (error) {
        console.error(error);
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
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    };

    userLoginWithApi();
  };

  return (
    <UserContext.Provider value={{ loginData, registerData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
