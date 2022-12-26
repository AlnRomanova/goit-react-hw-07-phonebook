import React from 'react';
import { ToastContainer } from 'react-toastify';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contactsSelectors';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      {isLoading && !error && <b>Loading...</b>}
      {error && <b>{error}</b>}
      <ContactList/>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
