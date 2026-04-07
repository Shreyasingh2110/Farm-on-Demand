import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/AdminDashboard.css";

function AdminDashboard({ user, onLogout }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="dashboard">
          <h2>Dashboard</h2>

          <div className="cards">
            <div className="card">Total Users: 120</div>
            <div className="card">Bookings: 45</div>
            <div className="card">Equipment: 30</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;