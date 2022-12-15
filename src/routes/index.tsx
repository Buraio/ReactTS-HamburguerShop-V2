import { Route, Routes } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" />
      <Route path="/dashboard" />
    </Routes>
  );
};

export default RoutesMain;
