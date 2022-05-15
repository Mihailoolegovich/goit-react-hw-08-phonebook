import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import emailIcon from '../Icons/email.png';
import passwordIcon from '../Icons/password.png';
import userIcon from '../Icons/user.png';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, password };

    dispatch(register(data)).then(error =>
      error.meta.requestStatus === 'rejected'
        ? alert(
            ' Incorrect data entered during registration, please check the data and try again'
          )
        : navigate(`/contacts`)
    );
    // setName('');
    // setEmail('');
    // setPassword('');
  }

  function myFunction() {
    const passInput = document.getElementById('registerPass');
    passInput.type === 'password'
      ? (passInput.type = 'text')
      : (passInput.type = 'password');
  }
  return (
    <>
      <form className="container--form" onSubmit={handleSubmit}>
        <label className="form__label">
          Name
          <input
            onChange={handleChange}
            className="form__input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <img src={userIcon} alt="user" className="form__input--icon" />
        </label>
        <label className="form__label">
          Email
          <input
            onChange={handleChange}
            className="form__input"
            type="email"
            name="email"
            value={email}
          />
          <img src={emailIcon} alt="email" className="form__input--icon" />
        </label>
        <label className="form__label">
          Password
          <input
            onChange={handleChange}
            className="form__input"
            type="password"
            name="password"
            minLength="7"
            value={password}
            id="registerPass"
          />
          <img
            src={passwordIcon}
            alt="password"
            className="form__input--icon"
          />
        </label>

        <label className=" form__label--checkbox">
          <input
            style={{ margin: '10px' }}
            type="checkbox"
            onClick={() => myFunction()}
          />
          Show Password
        </label>
        <button
          className="form__btn "
          //   disabled={isAdding}
          type="submit"
          name="button"
        >
          Registration
        </button>
      </form>
    </>
  );
}
