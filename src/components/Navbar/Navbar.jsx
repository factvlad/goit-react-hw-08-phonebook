import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import UserMenu from "./UserMenu/UserMenu";
import s from "./NavBar.module.scss"
import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/auth-selectors";

const Navbar = () => {
  const loginTrue = useSelector(isLogin)

  return (
    <header className={ s.header }>
      <nav className={ s.nav }>
        <NavbarMenu />
        { loginTrue ? <UserMenu /> : <NavbarAuth /> }
      </nav>
    </header>
  );
}

export default Navbar;
