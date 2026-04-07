import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Users({ user, onLogout }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-section">
        <Navbar user={user} onLogout={onLogout} />

        <div className="content">
          <h2>Users</h2>

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