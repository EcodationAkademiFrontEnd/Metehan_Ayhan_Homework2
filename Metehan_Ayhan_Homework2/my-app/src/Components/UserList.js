import React from "react";
import { Table } from "reactstrap";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Users</h2>
      <div className="users">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
