import { ContactForm, ContactList, Filter } from './../../components/';
import s from "../../components/App.module.scss"

const Contacts = () => {
  return (
    <>
      <div className={ s.container }>
        <h2>PhoneBook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default Contacts;
