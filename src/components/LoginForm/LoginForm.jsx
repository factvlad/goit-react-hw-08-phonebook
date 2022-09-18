import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const hendleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const dataUser = {
      name,
      email,
      password,
    };
    onSubmit(dataUser);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form
      onSubmit={ hendleSubmit }>
      <input
        onChange={ hendleInputChange }
        type="email"
        name="email"
        value={ email }
        required
        placeholder="Enter your Email"
      />
      <input
        onChange={ hendleInputChange }
        type="password"
        name="password"
        value={ password }
        minLength="7"
        required
        placeholder="Enter your Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
