import Input from "../Input";
import RedirectButton from "../RedirectButton";
import SubmitButton from "../SubmitButton";

const LoginForm = () => {
  return (
    <form>
      <h2>Login</h2>
      <Input />
      <Input />
      <SubmitButton />
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <RedirectButton />
    </form>
  );
};

export default LoginForm;
