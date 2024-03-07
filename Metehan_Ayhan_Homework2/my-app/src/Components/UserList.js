import React from "react";
import { Table } from "reactstrap";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Users</h2>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user-card">
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
                <tr>
                  <th scope="row"></th>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.username}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
