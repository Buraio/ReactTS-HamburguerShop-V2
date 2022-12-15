import { createContext } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { burguerKenzieApi } from "../../services/api";
import {
  iLoginFormData,
  iLoginRequest,
  iUserContext,
  iUserContextProps,
} from "./userContextInterfaces";

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const loginData: SubmitHandler<iLoginFormData> = (data) => {

    console.log(data)
    const userLoginWithApi = async () => {

      try {
        const request = await burguerKenzieApi.post<iLoginRequest>("/login", data);
  
        console.log(request.data);

      }
      catch (error) {
        console.error(error);
      }
    };

    userLoginWithApi();
  };

  return (
    <UserContext.Provider value={{ loginData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
