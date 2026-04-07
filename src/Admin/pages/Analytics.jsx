import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Analytics.css";

function Analytics({ user, onLogout }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="analytics">
          <h2>Analytics</h2>

          <div className="chart-box">
            📊 Charts coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;