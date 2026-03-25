import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://13.201.35.42/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
 
  return (
    <div>
      <h1>Users List</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;     
