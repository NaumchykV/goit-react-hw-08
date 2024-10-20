import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from '../Modal/Modal';
import EditContactForm from '../EditContactForm/EditContactForm';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted successfully!');
      })
      .catch(() => {
        toast.error('Failed to delete contact.');
      });
    setIsModalOpen(false);
  };

  return (
    <ListItem>
      <ListItemText primary={name} secondary={number} />
      <IconButton edge="end" aria-label="edit" onClick={() => setIsEditOpen(true)}>
        <EditIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={() => setIsModalOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        message={`Are you sure you want to delete ${name}?`}
      />
      {isEditOpen && (
        <EditContactForm
          contact={{ id, name, number }}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </ListItem>
  );
};

export default ContactItem;