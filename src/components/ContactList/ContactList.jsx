import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem/ContactListItem';

import { getContacts } from 'redux/contacts/contactsOperations';
export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const data = useSelector(state => state.contacts);
  const filterName = useSelector(state => state.filter);

  const filterList =
    data &&
    data.filter(el => el.name.toLowerCase().includes(filterName.toLowerCase()));

  return (
    <ul>
      {filterList &&
        filterList.map(list => <ContactListItem key={list.id} data={list} />)}
    </ul>
  );
}
