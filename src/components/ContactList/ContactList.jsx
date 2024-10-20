import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError, selectFilteredContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactItem from '../Contact/Contact';
import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {loading && <CircularProgress />}
      {error && <p>Error: {error}</p>}
      <List>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </List>
    </Box>
  );
};

export default ContactList;