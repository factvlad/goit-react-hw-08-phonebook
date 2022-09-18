import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import RegisterForm from "components/RegisterForm/RegisterForm";


const Register = () => {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(signup(data));
  }

  return (
    <div className="container">
      <h2>Register Page</h2>
      <RegisterForm onSubmit={ onRegister } />
    </div>
  );
}

export default Register;
