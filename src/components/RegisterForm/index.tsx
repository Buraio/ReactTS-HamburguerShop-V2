import { Link } from "react-router-dom";
import Input from "../Input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iRegisterFormData } from "../../contexts/UserContext/userContextInterfaces";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

const RegisterForm = () => {
  const { registerData } = useContext(UserContext);

  const registerSchema = Yup.object({
    name: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Nome precisa conter mais de 3 caracteres")
      .max(100, "Nome deve possuir menos de 100 caracteres"),
    email: Yup.string().required("Email obrigatório").email("Email inválido"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(8, "Senha deve ter pelo menos 8 caracteres")
      .matches(/(?=.*?[A-Z])/, "Senha deve ter ao menos uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "Senha deve ter ao menos uma letra minúscula")
      .matches(/(?=.*?[0-9])/, "Senha deve ter ao menos um número")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "Senha deve ter ao menos um caractere especial"
      ),
    confirmPassword: Yup.string()
      .required("Campo obrigatório")
      .oneOf([Yup.ref("password"), null], "Senhas devem estar iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(registerData)} noValidate>
      <div>
        <h2>Cadastro</h2>
        <Link to="/">Retornar para o login</Link>
      </div>

      <Input
        type="text"
        name="Nome"
        placeholder="Nome"
        register={register("name")}
        error={errors.name?.message}
      />
      <Input
        type="email"
        name="Email"
        placeholder="Email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        type="password"
        name="Senha"
        placeholder="Senha"
        register={register("password")}
        error={errors.password?.message}
      />
      <Input
        type="password"
        name="Confirmar senha"
        placeholder="Confirmar senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default RegisterForm;
