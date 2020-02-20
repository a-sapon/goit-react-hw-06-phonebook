import React from 'react';
import './App.css';
import ContactForm from './contactForm/ContactForm';
import ContactsList from './contactsList/ContactsList';

const App = () => (
  <>
  <h2>Phonebook</h2>
    <ContactForm />
    <ContactsList />
  </>
);

export default App;