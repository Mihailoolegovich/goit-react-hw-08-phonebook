import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import emailIcon from '../Icons/email.png';
import passwordIcon from '../Icons/password.png';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const passInput = document.getElementById('loginPass');
    checked ? (passInput.type = 'text') : (passInput.type = 'password');
  }, [checked]);

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { email, password };

    dispatch(logIn(data)).then(error =>
      error.payload === 400
        ? alert('Incorrect username or password, please try again')
        : navigate(`/contacts`)
    );

    // setEmail('');
    // setPassword('');
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
          <img src={emailIcon} alt="email" className="form__input--icon" />
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
          <img src={passwordIcon} alt="email" className="form__input--icon" />
        </label>
        <div className=" form__label--checkbox">
          <label>
            <input
              style={{ margin: '10px' }}
              type="checkbox"
              // onClick={() => myFunction()}
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
            />
          </label>
          <p> Show Password</p>
        </div>
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
