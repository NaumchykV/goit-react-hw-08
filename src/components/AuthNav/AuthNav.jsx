import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button component={NavLink} to="/register" color="inherit">
        Register
      </Button>
      <Button component={NavLink} to="/login" color="inherit">
        Log In
      </Button>
    </Stack>
  );
};

export default AuthNav;