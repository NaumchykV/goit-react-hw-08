import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';
import css from './EditContactForm.module.css';

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: contact.name,
    number: contact.number,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    number: Yup.string().matches(/^\d{7}$/, 'Invalid phone number').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(updateContact({ contactId: contact.id, contact: values })).unwrap();
      toast.success('Contact updated successfully!');
      onClose();
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Failed to update contact.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field name="name" type="text" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Number
          <Field name="number" type="text" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.button}>Save</button>
        <button type="button" onClick={onClose} className={css.button}>Cancel</button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
