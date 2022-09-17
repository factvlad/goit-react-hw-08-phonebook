import { ContactForm, ContactList, Filter } from 'components/';

const Contacts = () => {
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
