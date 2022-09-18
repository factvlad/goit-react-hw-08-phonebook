import { useSelector, useDispatch } from "react-redux";
import { getFilterContacts } from "../../redux/filter/filter-selectors";
import {
  removeContacts
} from "../../redux/contacts/operations";
import s from "./ContactsList.module.scss"
import { getContacts } from "../../redux/contacts/contacts-selecrot"

const ContactList = () => {

  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilterContacts);
  const getContactsList = useSelector(getContacts)
  const getContactsRender = getContactsList?.filter((el) =>
    el.name.toLowerCase().includes(contactsFilter.toLowerCase()))


  function removeContact(id) {
    dispatch(removeContacts(id));
  }
  const render = getContactsRender?.map(({ name, number, id }) => (
    <li className={ s.contacts } key={ id }>
      <span className={ s.btnDel }
        onClick={ () => {
          removeContact(id);
        } }>X</span>
      <span className={ s.name }>
        { name } :
      </span>
      { number }
    </li>
  ))

  return (
    <ul className={ s.contacts }>
      { render }
    </ul>
  );
};

export default ContactList
