import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { iLoginFormData } from "../../contexts/UserContext/userContextInterfaces";
import Input from "../Input";
import RedirectButton from "../RedirectButton";

const LoginForm = () => {
  const { loginData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({});

  return (
    <form>
      <h2>Login</h2>
      <Input
        name="Nome"
        type="text"
        placeholder="Nome"
        register={register("name")}
      />
      <Input
        name="Senha"
        type="password"
        placeholder="Senha"
        register={register("password")}
      />
      <button onClick={handleSubmit(loginData)}>Entrar</button>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <RedirectButton />
    </form>
  );
};

export default LoginForm;
