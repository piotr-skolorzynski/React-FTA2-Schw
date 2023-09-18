import './error-modal.css';

const ErrorModal = () => {
  return (
    <div className='backdrop'>
      <div className='modal'>
        <div className='header'>
          <h2>Error</h2>
        </div>
        <div className='content'>
          <p>error message</p>
        </div>
        <div className='actions'>Close</div>
      </div>
    </div>
  );
};

export default ErrorModal;
