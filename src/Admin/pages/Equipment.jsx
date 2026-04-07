import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";

function Equipment() {
  return (
    <div className="admin-container">

      <Sidebar />

      <div className="main-section">

        <div className="navbar">
          <h3>Equipment</h3>
        </div>

        <div className="content">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Projector</td>
                <td>5</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Camera</td>
                <td>2</td>
                <td>In Use</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Equipment;