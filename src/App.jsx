import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import { fetchCurrentUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        {!isRefreshing && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />} />
            <Route path="login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
            <Route path="contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
          </Routes>
        )}
      </Layout>
    </Router>
  );
}

export default App;