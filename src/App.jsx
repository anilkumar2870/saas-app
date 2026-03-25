import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://13.201.35.42/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
 
  return (
    <div style={{ padding: "20px" }}>
      <h1>Users from EC2 API</h1>
      
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
          <p><b>ID:</b> {user.id}</p>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</b>
          <hr />
        </div>
      ))
    )}
  </div>
  );
}

export default App;     
