import { NavLink } from 'react-router-dom';

export default function AutNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => (!isActive ? 'link' : 'activeLink')}
      >
        Sing Up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (!isActive ? 'link' : 'activeLink')}
      >
        Log In
      </NavLink>
    </div>
  );
}
