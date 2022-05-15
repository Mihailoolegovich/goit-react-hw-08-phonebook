import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toastSuccess, toastInfo } from '../ToastAlert/ToastAlert';
import './ContactForm.css';
import { postContacts } from 'redux/contacts/contactsOperations';
import contactIcon from '../../Icons/contact.png';
import phoneIcon from '../../Icons/phone.png';

// import { MdPermContactCalendar } from 'react-icons';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  }

  const contacts = useSelector(state => state.contacts);

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, number };

    if (
      contacts.find(el =>
        el.name.toLowerCase().includes(data.name.toLowerCase())
      )
    ) {
      return toastInfo(`${data.name} is already in contacts`);
    }

    dispatch(postContacts(data)).then(() =>
      toastSuccess(`New contact ${name} added!`)
    );

    setName('');
    setNumber('');
  }

  return (
    <form className="container--form" onSubmit={handleSubmit}>
      <label className="form__label">
        {/* <MdPermContactCalendar /> */}
        <input
          onChange={handleChange}
          className="form__input"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <img
          src={contactIcon}
          alt="email"
          className="form__input--icon"
          style={{ top: '20%' }}
        />
        {/* <span>
          <svg width="18px" height="18px">
            <use href={require('../../Icons/contact.png')}></use>
          </svg>
        </span> */}
      </label>
      <label className="form__label">
        <input
          onChange={handleChange}
          className="form__input"
          type="tel"
          name="number"
          placeholder="Number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <img
          src={phoneIcon}
          alt="email"
          className="form__input--icon"
          style={{ top: '20%' }}
        />
      </label>
      <button className="form__btn " type="submit" name="button">
        Add contact
      </button>
    </form>
  );
}
