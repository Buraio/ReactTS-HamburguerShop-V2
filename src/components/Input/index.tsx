import { InputHTMLAttributes, useContext } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import StyledInput from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error: string | undefined;
}

const Input = ({ name, type, placeholder, register, error }: iInputProps) => {
  return (
    <fieldset>
      <legend>{name}</legend>
      <StyledInput type={type} placeholder={placeholder} {...register} />
      {error && <p className="validation">{error}</p>}
    </fieldset>
  );
};

export default Input;
