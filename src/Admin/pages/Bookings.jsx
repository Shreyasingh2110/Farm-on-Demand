import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Bookings({ user, onLogout }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-section">
        <Navbar user={user} onLogout={onLogout} />

        <div className="content">
          <h2>Bookings</h2>

          <table className="user-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Shreya</td>
                <td>10 Apr</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>12 Apr</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bookings;