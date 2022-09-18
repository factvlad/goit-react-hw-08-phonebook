import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/auth/auth-selectors";
import { logout } from "redux/auth/auth-operations";


const UserMenu = () => {

  const userName = useSelector(getUser)
  const dispatch = useDispatch()
  return (
    <div>
      <div>{ userName.name }</div>
      <div>{ userName.email }</div>
      <button onClick={ () => dispatch(logout()) }>Log Out</button>
    </div>
  );
}

export default UserMenu;
