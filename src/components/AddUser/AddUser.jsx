import Button from '../Button/Button';
import './add-user.css';

const AddUser = () => {
  return (
    <div className='container'>
      <div className='input'>
        <label htmlFor='username'>Username</label>
        <input type='text' />
      </div>

      <div className='input'>
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' />
      </div>

      <Button text={'Add User'} style={{ marginLeft: '3rem' }} />
    </div>
  );
};

export default AddUser;
