import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/AdminDashboard.css";

import { FaUsers, FaCalendarCheck, FaTractor } from "react-icons/fa";

function AdminDashboard({ user, onLogout }) {

  const stats = [
    { title: "Users", value: 40, icon: <FaUsers /> },
    { title: "Bookings", value: 25, icon: <FaCalendarCheck /> },
    { title: "Equipment", value: 12, icon: <FaTractor /> }
  ];

  const activities = [
    "Shreya booked Tractor",
    "Rahul added Harvester",
    "Booking approved",
    "New Farmer registered"
  ];

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="dashboard">

          <h2 className="heading">Dashboard</h2>

          {/* STATS */}
          <div className="stats">
            {stats.map((item, index) => (
              <div key={index} className="stat-card">
                <div className="icon">{item.icon}</div>
                <p>{item.title}</p>
                <h1>{item.value}</h1>
              </div>
            ))}
          </div>

          {/* GRID */}
          <div className="grid">

            <div className="box">
              <h3>Recent Activity</h3>
              <ul>
                {activities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="box">
              <h3>Quick Actions</h3>
              <button className="primary">+ Add User</button>
              <button>+ Add Equipment</button>
              <button>+ Create Booking</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;