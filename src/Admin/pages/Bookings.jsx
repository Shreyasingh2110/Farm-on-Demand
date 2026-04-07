import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Bookings.css";

function Bookings({ user, onLogout }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="bookings">
          <h2>Bookings</h2>

          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Equipment</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>
                <td>Tractor</td>
                <td>10 Apr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bookings;