import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
        Log Out
      </Button>
    </Stack>
  );
};

export default UserMenu;