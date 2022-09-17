import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import s from "./NavBar.module.scss"

const Navbar = () => {
  return (
    <header className={ s.header }>
      <nav className={ s.nav }>
        <NavbarMenu />
        <NavbarAuth />
      </nav>
    </header>
  );
}

export default Navbar;
