import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";

function Bookings() {
  return (
    <div className="admin-container">

      <Sidebar />

      <div className="main-section">

        <div className="navbar">
          <h3>Bookings</h3>
        </div>

        <div className="content">
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
                <td>10 Apr 2026</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>12 Apr 2026</td>
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