import { Navbar } from "components"
import s from "../App.module.scss"

const Layout = () => {
  return (
    <>
      <div className={ s.wrapper }>
        <div className={ s.container }>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Layout;
