import Button from '../Button/Button';
import './error-modal.css';

const ErrorModal = ({ title, message, handleClose }) => {
  return (
    <div className='backdrop' onClick={handleClose}>
      <div className='modal'>
        <div className='header'>
          <h2>{title}</h2>
        </div>
        <div className='content'>
          <p>{message}</p>
        </div>
        <div className='actions'>
          <Button action={handleClose}>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
