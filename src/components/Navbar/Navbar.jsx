import { Routes, Route, NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import s from "../App.module.scss"
import { Contacts, Home, Login, Register, NotFound } from "components"

const Navbar = () => {
  const activeNav = ({ isActive }) => {
    return isActive ? `${s.navLink} ${s.active}` : s.navLink;
  };

  return (
    <>
      <header className={ s.header }>
        <nav className={ s.nav }>
          <NavLink to="/ " className={ activeNav }>
            Home
          </NavLink>
          <NavLink to="/contacts" className={ activeNav }>
            Contacts
          </NavLink>
          <NavLink to="/login" className={ activeNav }>
            Login
          </NavLink>
          <NavLink to="/register" className={ activeNav }>
            Register
          </NavLink>
        </nav>
      </header>
      <div className={ s.container }>
        <main className={ s.main }>
          <Routes >
            <Route path="/" element={ <Home /> } />
            <Route path="/contacts" element={ <Contacts /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </main>
      </div >
    </>
  );
}

export default Navbar;
