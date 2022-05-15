import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import './AppBar.css';
import UserMenu from '../UserMenu';
import AutNav from 'components/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <header>
        <nav className="container_nav">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? 'link' : 'link activeLink'
              }
            >
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  !isActive ? 'link' : 'link activeLink'
                }
              >
                Contacts
              </NavLink>
            )}
          </div>
          {isLoggedIn ? <UserMenu /> : <AutNav />}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;
