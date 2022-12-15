import { createContext } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import {
  iLoginFormData,
  iUserContext,
  iUserContextProps,
} from "./userContextInterfaces";

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const loginData: SubmitHandler<iLoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <UserContext.Provider value={{ loginData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
