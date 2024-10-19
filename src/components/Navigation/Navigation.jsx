import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Navigation = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button component={NavLink} to="/" color="inherit">
        Home
      </Button>
      <Button component={NavLink} to="/contacts" color="inherit">
        Contacts
      </Button>
    </Stack>
  );
};

export default Navigation;