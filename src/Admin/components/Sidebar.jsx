import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaTools,
  FaChartBar
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaHome /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
    { name: "Bookings", path: "/admin/bookings", icon: <FaCalendarAlt /> },
    { name: "Equipment", path: "/admin/equipment", icon: <FaTools /> },
    { name: "Analytics", path: "/admin/analytics", icon: <FaChartBar /> }
  ];

  return (
    <div className="sidebar">
    <img src={logo} alt="logo" />

      {menu.map((item, i) => (
        <Link
          key={i}
          to={item.path}
          className={`link ${location.pathname === item.path ? "active" : ""}`}
        >
          <span className="icon">{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;