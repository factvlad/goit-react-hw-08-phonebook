import { useSelector, useDispatch } from "react-redux";
import { getFilterContacts } from "../../redux/filter/filter-selectors";
import { useEffect } from "react";
import {
  removeContacts
} from "../../redux/contacts/operations";
import { getContacts } from "../../redux/contacts/contacts-selecrot"
import { fetchContacts } from 'redux/contacts/operations';
import s from "./ContactsList.module.scss"

const ContactList = () => {

  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilterContacts);
  const getContactsList = useSelector(getContacts)
  const getContactsRender = getContactsList?.filter((el) =>
    el.name.toLowerCase().includes(contactsFilter.toLowerCase()))

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  function removeContact(id) {
    dispatch(removeContacts(id));
  }
  const render = getContactsRender?.map(({ name, number, id }) => (
    <li className={ s.contacts } key={ id }>
      <span className={ s.name }>
        { name } :
      </span>
      <span> { number }</span>
      <span className={ s.btnDel }
        onClick={ () => {
          removeContact(id);
        } }>delete</span>

    </li>
  ))

  return (
    <ul className={ s.contacts }>
      { render }
    </ul>
  );
};

export default ContactList
