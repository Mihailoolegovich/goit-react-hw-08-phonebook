import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';
import './ContactListItem.css';

export default function ContactListItem({ data }) {
  const { id, name, phone } = data;

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  function toastAdd() {
    toast.info(`Contact ${name} deleted!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <li className="contacts__li" id={id}>
        <div className="contacts__data">
          <p className="contacts__name">{name}: </p>
          <p className="contacts__number">{phone}</p>
        </div>
        <button
          className="contacts__btn"
          type="button"
          disabled={isDeleting}
          onClick={() => {
            deleteContact({ id }).then(() => toastAdd());
          }}
        >
          {isDeleting ? <div className="loader "></div> : 'Delete'}
        </button>
      </li>
    </>
  );
}
