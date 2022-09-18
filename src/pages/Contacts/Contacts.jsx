import { ContactForm, ContactList, Filter } from 'components';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const Contacts = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className="container">
      <h2>PhoneBook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Contacts;
