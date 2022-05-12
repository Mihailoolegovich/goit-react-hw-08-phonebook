import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import ContactListItem from './ContactListItem/ContactListItem';

export default function ContactList() {
  const { data, error, isLoading, isSuccess } = useGetContactsQuery();
  const filterName = useSelector(state => state.filter);

  const filterList =
    data &&
    data.filter(el => el.name.toLowerCase().includes(filterName.toLowerCase()));

  return (
    <ul>
      {isLoading && <h2 style={{ textAlign: 'center' }}>Loading ...</h2>}
      {error && <h2 style={{ textAlign: 'center' }}>{error.data}</h2>}
      {isSuccess &&
        filterList.map(list => <ContactListItem key={list.id} data={list} />)}
    </ul>
  );
}
