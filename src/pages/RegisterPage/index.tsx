import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import StyledContainer from "../../styles/container";
import RegisterContainer from "./style";

const RegisterPage = () => {
  return (
    <RegisterContainer>
      <Header />
      <RegisterForm />
    </RegisterContainer>
  );
};

export default RegisterPage;
