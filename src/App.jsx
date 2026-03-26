import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://13.201.35.42/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
 
  return (
    <div>
      <h1>Users from EC2 API</h1>
      {users.map((u) => (
        <div key={u.id}>
          <p>{u.name} - {u.email}</p>
        </div>
      ))}   
  </div>
  );
}

export default App;     
