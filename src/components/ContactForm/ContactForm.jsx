import { useState } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contacts/operations";

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const dispatch = useDispatch();
  const { name, number } = state;
  const nameId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(state));
    e.target.reset(
      setState({
        name: "",
        number: "",
      })
    );
  };

  const handleChange = ({ target }) => {
    setState((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  return (
    <form
      onSubmit={ handleSubmit }>
      <input
        type="text"
        id={ nameId }
        name="name"
        value={ name }
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={ handleChange }
        placeholder="Enter Name"
      />
      <input
        onChange={ handleChange }
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={ number }
        required
        placeholder="Enter Number"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
export default ContactForm
