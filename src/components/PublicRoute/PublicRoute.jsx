import { useSelector } from "react-redux";
import { isLogin } from "../../redux/auth/auth-selectors"
import { Navigate, Outlet } from "react-router-dom";

const PublickRoute = () => {
  const loginTrue = useSelector(isLogin)

  if (loginTrue) {
    return <Navigate to="/contacts" />
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default PublickRoute;
