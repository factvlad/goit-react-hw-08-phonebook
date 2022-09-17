import { NavLink } from "react-router-dom";
import s from "../NavBar.module.scss"

const NavbarMenu = () => {
  const activeNav = ({ isActive }) => {
    return isActive ? `${s.navLink} ${s.active}` : s.navLink;
  };

  return (
    <>
      <NavLink to="/" className={ activeNav } end>Home</NavLink>
      <NavLink to="/contacts" className={ activeNav }>Contacts</NavLink>
    </>
  );
}

export default NavbarMenu;
