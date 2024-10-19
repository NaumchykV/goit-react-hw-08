import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.login}>
      <h1>Log In</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
