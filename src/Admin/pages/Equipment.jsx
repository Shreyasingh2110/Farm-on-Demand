import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Equipment.css";

function Equipment({ user, onLogout }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="equipment">
          <h2>Equipment</h2>

          <div className="equip-list">
            <div className="equip-card">Tractor</div>
            <div className="equip-card">Harvester</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment;