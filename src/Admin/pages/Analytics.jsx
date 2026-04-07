import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Analytics.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

function Analytics({ user, onLogout }) {

  // 📊 SAMPLE DATA
  const bookingData = [
    { name: "Jan", bookings: 30 },
    { name: "Feb", bookings: 45 },
    { name: "Mar", bookings: 60 },
    { name: "Apr", bookings: 40 }
  ];

  const userData = [
    { name: "Admin", value: 5 },
    { name: "User", value: 20 },
    { name: "Farmer", value: 15 }
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="analytics">
          <h2>Analytics</h2>

          <div className="charts">

            {/* BAR CHART */}
            <div className="chart-card">
              <h3>Monthly Bookings</h3>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bookingData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bookings" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* PIE CHART */}
            <div className="chart-card">
              <h3>User Distribution</h3>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={userData}
                    dataKey="value"
                    outerRadius={100}
                  >
                    {userData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

