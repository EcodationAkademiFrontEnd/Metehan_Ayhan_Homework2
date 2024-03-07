import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && surname && username) {
      addUser({ name, surname, username });
      setName("");
      setSurname("");
      setUsername("");
    } else {
      alert("Lütfen tüm alanları doldurun!");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name:"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Add New User</button>
      </form>
    </div>
  );
};

export default UserForm;
