import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "redux/auth/auth-operations";
import { Navbar } from "components";
import UserRoutes from "./UserRouters";
import s from "./App.scss"
import { getLoading } from "redux/auth/auth-selectors";
import Loader from "./Loader/Loader"


export const App = () => {
  const dispatch = useDispatch()
  const loadingTrue = useSelector(getLoading)

  useEffect(() => {
    dispatch(current())
  }, [dispatch])

  if (loadingTrue) {
    return <Loader className={s.loader}/>
  }

  return (
    <div className={ s.wrapper }>
      <Navbar />
      <UserRoutes />
    </div>
  );
};
