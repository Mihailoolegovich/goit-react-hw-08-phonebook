import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { email, password };

    console.log('data', data);
    dispatch(logIn(data)).then(error =>
      error.payload === 400
        ? alert('Incorrect username or password, please try again')
        : navigate(`/contacts`)
    );

    // setEmail('');
    // setPassword('');
  }
  function myFunction() {
    const passInput = document.getElementById('loginPass');
    passInput.type === 'password'
      ? (passInput.type = 'text')
      : (passInput.type = 'password');
  }
  return (
    <>
      <form className="container--form" onSubmit={handleSubmit}>
        <label className="form__label">
          Email
          <input
            onChange={handleChange}
            className="form__input"
            type="email"
            name="email"
            // placeholder="xxx-xx-xx"
            value={email}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label className="form__label">
          Password
          <input
            onChange={handleChange}
            className="form__input"
            type="password"
            name="password"
            // placeholder="xxx-xx-xx"
            minLength="7"
            value={password}
            id="loginPass"
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
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
          Login
        </button>
      </form>
    </>
  );
}
