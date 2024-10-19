import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.register}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
