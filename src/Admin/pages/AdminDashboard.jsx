import {useState,useEffect} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/admin.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function AdminDashboard({ user, onLogout }) {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if(dark){
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [dark]);
  const data = [
    { name: "Mon", bookings: 10 },
    { name: "Tue", bookings: 15 },
    { name: "Wed", bookings: 8 },
    { name: "Thu", bookings: 20 },
    { name: "Fri", bookings: 25 },
    { name: "Sat", bookings: 18 },
    { name: "Sun", bookings: 12 }
  ];

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-section">
        <Navbar user={user} onLogout={onLogout} />

        <div className="content">
          <h1 className="page-title">Dashboard Overview</h1>

          {/* Cards */}
          <div className="card-container">
            <div className="card red">
              <h3>👤 Total Users</h3>
              <p>120</p>
            </div>

            <div className="card yellow">
              <h3>📦 Bookings</h3>
              <p>80</p>
            </div>

            <div className="card green">
              <h3>🛠 Equipment</h3>
              <p>45</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="chart-box">
            <h2>Weekly Bookings</h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bookings" fill="#e23744" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Activity */}
          <div className="activity">
            <h2>Recent Activity</h2>
            <ul>
              <li>✅ User Rahul booked equipment</li>
              <li>✅ New user registered</li>
              <li>⚙ Equipment updated</li>
              <li>📦 Order completed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;