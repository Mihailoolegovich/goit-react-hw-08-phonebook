import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/ContactFilter';
import ContactList from '../components/ContactList';
import { ToastContainer } from 'react-toastify';

export default function ContactsPage() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer />
    </>
  );
}
