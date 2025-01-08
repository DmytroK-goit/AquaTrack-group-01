import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PublicRoute;
