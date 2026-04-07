import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Analytics({ user, onLogout }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-section">
        <Navbar user={user} onLogout={onLogout} />

        <div className="content">
          <h2>Analytics</h2>

          <div className="card-container">
            <div className="card">
              <h4>Revenue</h4>
              <p>$12,500</p>
            </div>

            <div className="card">
              <h4>Bookings</h4>
              <p>320</p>
            </div>

            <div className="card">
              <h4>Users</h4>
              <p>150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;