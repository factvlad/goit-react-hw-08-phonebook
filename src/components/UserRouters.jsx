import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import PublicRoute from "./components/PublicRoute/PublicRoute";

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import("../pages/Register/Register"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const UserRoutes = () => {
  return (
    <Suspense fallback={ <p>...Load page</p> }>
      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route path="/contacts" element={ <Contacts /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Suspense>
  )
}

export default UserRoutes;
