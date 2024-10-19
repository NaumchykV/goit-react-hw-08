import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>{message}</p>
        <div className={css.actions}>
          <button onClick={onConfirm} className={css.button_y}>Yes</button>
          <button onClick={onClose} className={css.button_n}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
