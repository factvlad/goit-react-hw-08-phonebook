import LoginForm from "components/LoginForm/LoginForm";
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

const Login = () => {
  const dispatch = useDispatch();
  
  const onLogin = (data) => {
    dispatch(login(data));
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <LoginForm onSubmit={ onLogin } />
    </div>
  );
}

export default Login;
