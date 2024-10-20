import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully!');
        resetForm();
      })
      .catch(() => {
        toast.error('Failed to add contact.');
      });
  };
  const orderSchema = Yup.object().shape({
    name: Yup.string().min(3, 'To Short').max(50, 'To Long').required('Required field'),
    number: Yup.string().matches(/^\d{7}$/, 'Invalid phone number').required('Required field'),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={orderSchema}>
      {({ isSubmitting }) => (
        <Form>
          <Box mb={2} sx={{ width: '504px' }}>
            <Field name="name" as={TextField} label="Name" fullWidth />
            <ErrorMessage name="name" component="div" />
          </Box>
          <Box mb={2} sx={{ width: '504px' }}>
            <Field name="number" as={TextField} label="Number" fullWidth />
            <ErrorMessage name="number" component="div" />
          </Box>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;