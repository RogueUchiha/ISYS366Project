import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { admin, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h1>Loading...</h1>;
  }

  return admin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
