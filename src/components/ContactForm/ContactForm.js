import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateContactMutation } from 'redux/contacts/contactsApi';
import './ContactForm.css';

export default function ContactForm() {
  const [createContact, { isLoading: isAdding }] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  }

  function toastAdd() {
    toast.success(`New contact ${name} added!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = { name: name, phone: number };

    createContact(data).then(() => toastAdd);
    toastAdd();
    setName('');
    setNumber('');
  }

  return (
    <form className="container--form" onSubmit={handleSubmit}>
      <label className="form__label">
        Name
        <input
          onChange={handleChange}
          className="form__input"
          type="text"
          name="name"
          value={name}
          placeholder="Ivan Ivanovich"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="form__label">
        Number
        <input
          onChange={handleChange}
          className="form__input"
          type="tel"
          name="number"
          placeholder="xxx-xx-xx"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button
        className="form__btn "
        disabled={isAdding}
        type="submit"
        name="button"
      >
        {isAdding ? <div className="loader "></div> : 'Add contact'}
      </button>
    </form>
  );
}
