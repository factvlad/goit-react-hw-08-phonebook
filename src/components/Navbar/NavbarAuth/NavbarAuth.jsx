import { NavLink } from "react-router-dom";
import s from "../NavBar.module.scss"

const NavbarAuth = () => {
  const activeNav = ({ isActive }) => {
    return isActive ? `${s.navLink} ${s.active}` : s.navLink;
  };

  return (
    <div className={s.navLogin}>
      <NavLink to="/register" className={ activeNav }>Register</NavLink>
      <NavLink to="/login" className={ activeNav }>Login</NavLink>
    </div>
  )
};

export default NavbarAuth;
