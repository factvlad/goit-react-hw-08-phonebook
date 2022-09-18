import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "components"
import Loader from "./Loader/Loader";

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import("../pages/Register/Register"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const UserRoutes = () => {
  return (
    <Suspense fallback={ <div></div>}>
      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route element={ <PrivateRoute /> } >
          <Route path="contacts" element={ <Contacts /> } />
        </Route>
        <Route element={ <PublicRoute /> }>
          <Route path="login" element={ <Login /> } />
          <Route path="register" element={ <Register /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Suspense>
  )
}

export default UserRoutes;
