import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import './UserMenu.css';
import avatar from '../../Icons/avatar.png';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(state => state.auth.user.name);

  function featchLogOut() {
    dispatch(logout()).then(() => navigate(`/login`));
  }

  return (
    <div className="user-menu__container">
      <img src={avatar} alt="" className="user-menu__avatar" />
      <span className="user-menu__text">{`Hello, ${userName}`}</span>
      <button
        className="user-menu__btn"
        type="button"
        onClick={() => featchLogOut()}
      >
        Logout
      </button>
    </div>
  );
}
