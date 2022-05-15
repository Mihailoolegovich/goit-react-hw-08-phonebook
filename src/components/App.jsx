import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './AppBar/AppBar';
import { HomePage, ContactsPage, RegisterPage, LoginPage } from 'pages';
import { fetchCurrentUser } from 'redux/auth/authOperations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          {isLoggedIn ? (
            <Route path="contacts" element={<ContactsPage />} />
          ) : (
            <>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </>
          )}
          <Route
            path="*"
            element={isLoggedIn ? <ContactsPage /> : <HomePage />}
          />
        </Route>
      </Routes>
    </>
  );
}
