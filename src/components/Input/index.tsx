import { InputHTMLAttributes, useContext } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = ({ name, type, placeholder, register }: iInputProps) => {
  return (
    <fieldset>
      <legend>{name}</legend>
      <input type={type} placeholder={placeholder} {...register} />
    </fieldset>
  );
};

export default Input;
