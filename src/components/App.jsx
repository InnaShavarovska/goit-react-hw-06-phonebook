import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
