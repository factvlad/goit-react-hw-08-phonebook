// import { Loader } from "components";
// import { Suspense } from 'react';
// import { Routes, Route } from "react-router-dom";
// import { Suspense, lazy } from 'react';
import { Contacts, Home, Login, Register, Navbar } from "components"
import s from "../App.module.scss"

// const Home = lazy(() => import('components'));
// const Login = lazy(() => import('components'));
// const Register = lazy(() => import('components'));
// const Contacts = lazy(() => import('components'));

const Layout = () => {
  return (
    <>
      <div className={ s.wrapper }>
        {/* <Suspense fallback={ <h1>Loading...</h1> }> */ }
        {/* <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="contacts" element={ <Contacts /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="register" element={ <Register /> } />
        </Routes> */}
        {/* </Suspense> */ }
      <div className={s.container}>  <Navbar /></div>
        {/* <Routes >
          <Route path="/" element={ <Navbar /> }>
            <Route index element={ <Home /> } />
            <Route path="contacts" element={ <Contacts /> } />
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
          </Route>
        </Routes> */}
      </div>
    </>
  );
}

export default Layout;


//{/* <div className={ s.wrapper }>
//{/* <Suspense fallback={ <h1>Loading...</h1> }> */ }
{/* <Routes >
  <Route path="/" element={ <Navbar /> }>
    <Route index element={ <Home /> } />
    <Route path="contacts" element={ <Contacts /> } />
    <Route path="login" element={ <Login /> } />
    <Route path="register" element={ <Register /> } />
  </Route>
</Routes> */}
//{/* </Suspense> */ }
//</div> */}
