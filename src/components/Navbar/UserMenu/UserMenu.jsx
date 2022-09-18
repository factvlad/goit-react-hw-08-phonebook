import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/auth/auth-selectors";
import { logout } from "redux/auth/auth-operations";
import s from "./UserMenu.module.scss"


const UserMenu = () => {

  const userName = useSelector(getUser)
  const dispatch = useDispatch()
  return (
    <div className={s.menu}>
      <span>{ userName.name }</span>
      <span>{ userName.email }</span>
      <button onClick={ () => dispatch(logout()) }>LogOut</button>
    </div>
  );
}

export default UserMenu;
