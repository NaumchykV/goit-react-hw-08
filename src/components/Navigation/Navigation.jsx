import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Stack direction="row" spacing={2}>
      <Button component={NavLink} to="/" color="inherit">
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" color="inherit">
          Contacts
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;
