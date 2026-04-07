import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";   

function Users() {
  return (
    <div className="admin-container">

      <Sidebar />

      <div className="main-section">

        <div className="navbar">
          <h3>Users</h3>
        </div>

        <div className="content">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Shreya</td>
                <td>shreya@gmail.com</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>rahul@gmail.com</td>
                <td>User</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Users;