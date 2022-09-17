import { Navbar } from "components";
import UserRoutes from "./UserRouters";
import s from "./App.scss"

export const App = () => {
  return (
    <div className={ s.wrapper }>
      <Navbar />
      <UserRoutes />
    </div>
  );
};
