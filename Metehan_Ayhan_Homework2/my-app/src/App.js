import React, { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const newUser = { ...user, id: new Date().getTime() };
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <h1>User Addition Menu</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
