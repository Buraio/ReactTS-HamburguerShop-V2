import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

const ProtectedRoute = () => {
  const { dashboardLoading, user } = useContext(UserContext);

  console.log(user)
  if (dashboardLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;