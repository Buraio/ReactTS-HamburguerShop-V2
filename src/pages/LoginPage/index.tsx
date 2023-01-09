import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import StyledContainer from "../../styles/container";

const LoginPage = () => {
  return (
    <StyledContainer>
      <LoginForm />
      <Header />
    </StyledContainer>
  );
};

export default LoginPage;
