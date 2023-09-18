import { useState } from 'react';
import Button from '../Button/Button';
import './add-user.css';
import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');

  const [error, setError] = useState(null);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleUserAge = (event) => {
    setUserAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username.trim().length || !userAge.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Plese eneter a valid name and age (non-empty values)',
      });
      return;
    }

    if (Number(userAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Plese eneter a valid age (> 0)',
      });
      return;
    }

    const newUser = {
      userId: Math.random() * 1000,
      username,
      userAge: Number(userAge),
    };
    addUser(newUser);
    handleReset();
  };

  const handleReset = () => {
    setUsername('');
    setUserAge('');
  };

  const confirmError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleClose={confirmError}
        />
      )}

      <form className='container' onSubmit={handleSubmit}>
        <div className='input'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={handleUsername}
          />
        </div>

        <div className='input'>
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={userAge}
            onChange={handleUserAge}
          />
        </div>

        <Button style={{ marginLeft: '3rem' }} type='submit'>
          Add User
        </Button>
      </form>
    </>
  );
};

export default AddUser;
