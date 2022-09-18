import { NavLink } from "react-router-dom";
import s from "../NavBar.module.scss"
import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/auth-selectors";

const NavbarMenu = () => {

  const loginTrue = useSelector(isLogin)


  const activeNav = ({ isActive }) => {
    return isActive ? `${s.navLink} ${s.active}` : s.navLink;
  };

  return (
    <>
      <NavLink to="/" className={ activeNav } end>Home</NavLink>
      { loginTrue &&
        <NavLink to="/contacts" className={ activeNav }>Contacts</NavLink>
      }
    </>
  );
}

export default NavbarMenu;
