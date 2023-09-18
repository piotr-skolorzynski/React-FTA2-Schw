import './user-list.css';

const UserList = (props) => {
  return (
    <div className='users'>
      <ul>
        {props.userList.map((user) => {
          return (
            <li key={user.userId}>
              {user.username} ({user.userAge} years old)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
