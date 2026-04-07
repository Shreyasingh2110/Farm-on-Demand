import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";

function Analytics() {
  return (
    <div className="admin-container">

      <Sidebar />

      <div className="main-section">

        <div className="navbar">
          <h3>Analytics</h3>
        </div>

        <div className="content">

          <div className="card-container">

            <div className="card">
              <h4>Total Revenue</h4>
              <p>$12,500</p>
            </div>

            <div className="card">
              <h4>Total Bookings</h4>
              <p>320</p>
            </div>

            <div className="card">
              <h4>Active Users</h4>
              <p>150</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Analytics;