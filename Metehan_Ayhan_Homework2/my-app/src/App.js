import React, { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addUser = (user) => {
    const newUser = { ...user, id: new Date().getTime() };
    setUsers([...users, newUser]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>User Addition Menu</h1>
      <button onClick={() => setShowForm(true)}>Add User</button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCancel}>
              &times;
            </span>
            <UserForm addUser={addUser} onCancel={handleCancel} />
          </div>
        </div>
      )}
      <UserList users={users} />
    </div>
  );
}

export default App;
