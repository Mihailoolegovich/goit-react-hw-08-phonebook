import React from 'react';
import { toastInfo } from 'components/ToastAlert/ToastAlert';
import './ContactListItem.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export default function ContactListItem({ data }) {
  const { id, name, number } = data;
  const dispatch = useDispatch();

  function featchDelete(id) {
    dispatch(deleteContact(id)).then(() =>
      toastInfo(`Contact ${name} deleted!`)
    );
  }
  return (
    <>
      <li className="contacts__li" id={id}>
        <div className="contacts__user">
          <p className="contacts__name">{name}: </p>
          <p className="contacts__number">{number}</p>
        </div>
        <button
          className="contacts__btn"
          type="button"
          onClick={() => featchDelete(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}
