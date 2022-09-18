import { useSelector } from "react-redux";
import { isLogin } from "../../redux/auth/auth-selectors"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const loginTrue = useSelector(isLogin)

  if (!loginTrue) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default PrivateRoute;
