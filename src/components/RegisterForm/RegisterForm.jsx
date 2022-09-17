import { useState } from 'react';
import { nanoid } from "@reduxjs/toolkit";


const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nameId = nanoid();

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
        type="text"
        id={ nameId }
        name="name"
        value={ name }
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={ hendleInputChange }
        placeholder="Enter your Name"
      />
      <input
        onChange={ hendleInputChange }
        type="email"
        name="email"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={ email }
        required
        placeholder="Enter your Email"
      />
      <input
        onChange={ hendleInputChange }
        type="password"
        name="password"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={ password }
        required
        placeholder="Enter your Password"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
