import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { iLoginFormData } from "../../contexts/UserContext/userContextInterfaces";
import Input from "../Input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import StyledForm from "../Form/style";

const LoginForm = () => {
  const { loginData } = useContext(UserContext);

  const loginSchema = Yup.object({
    email: Yup.string()
      .required("Nome é obrigatório")
      .email("Endereço de email inválido"),
    password: Yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(loginData)} noValidate>
      <h2>Login</h2>
      <Input
        name="Email"
        type="text"
        placeholder="Email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        name="Senha"
        type="password"
        placeholder="Senha"
        register={register("password")}
        error={errors.password?.message}
      />
      <button type="submit">Entrar</button>
      <p className="bottom">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </p>
      <Link to="/register">Cadastrar</Link>
    </StyledForm>
  );
};

export default LoginForm;
