import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFilterContacts } from "../../redux/filter/filter-selectors";
import {
  getContactsOperations,
  removeContactsOperation,
} from "../../redux/contacts/operations";
import s from "./ContactsList.module.scss"
import {getContacts} from "../../redux/contacts/contacts-selecrot"

const ContactList = () => {

  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilterContacts);
  const getContactsList = useSelector(getContacts)
  const getContactsRender = getContactsList.filter((el) =>
    el.name.toLowerCase().includes(contactsFilter.toLowerCase()))


  useEffect(() => {
    dispatch(getContactsOperations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function removeContact(id) {
    dispatch(removeContactsOperation(id));
  }


  return (
    <ul className={ s.contacts }>
      { getContactsRender?.map(({ name, phone, id }) => (
        <li className={ s.contacts } key={ id }>
          <span className={ s.btnDel }
            onClick={ () => {
              removeContact(id);
            } }>X</span>
          <span className={ s.name }>
            { name } :
          </span>
          { phone }
        </li>
      )) }
    </ul>
  );
};

export default ContactList
