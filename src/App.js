import { useState } from 'react';
import { AddUser, UserList } from './components'

function App() {
  const [userList, setUserList] = useState([])

  const addUser = (user) => {
    setUserList((prevList) => ([...prevList, user]))
  }

  return (
    <>
      <AddUser addUser={ addUser } />

      { userList.length && <UserList userList={ userList } /> }
    </>
  );
}

export default App;
