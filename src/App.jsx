<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
=======
import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import "./Admin/styles/admin.css";
>>>>>>> 88340e927403780c50c7600dba6fcfbc799ef256

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import AdminDashboard from "./Admin/pages/AdminDashboard";
import Analytics from "./Admin/pages/Analytics";
import Bookings from "./Admin/pages/Bookings";
import Equipment from "./Admin/pages/Equipment";
import Users from "./Admin/pages/Users";

import OwnerDashboard from "./Owner/pages/OwnerDashboard";
import MyEquipment from "./Owner/pages/MyEquipment";
import Requests from "./Owner/pages/Requests";

import FarmerDashboard from "./Farmer/pages/FarmerDashboard";
import BookingPage from "./Farmer/pages/BookingPage";
import ReviewPage from "./Farmer/pages/ReviewPage";
import BookingHistory from "./Farmer/pages/BookingHistory";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("authUser");
    if (!saved) return null;

    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem("authUser");
      return null;
    }
  });

  const handleLogin = (nextUser) => {
    setUser(nextUser);
    localStorage.setItem("authUser", JSON.stringify(nextUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
    navigate("/login");
  };

  return (
    <div className="App">
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Landing />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* 🔥 ROLE-BASED DASHBOARD (VERY IMPORTANT FIX) */}
        <Route
          path="/dashboard"
          element={
            user ? (
              user.role === "Admin" ? (
                <Navigate to="/admin/dashboard" />
              ) : user.role === "Owner" ? (
                <Navigate to="/owner/dashboard" />
              ) : user.role === "Farmer" ? (
                <Navigate to="/farmer/dashboard" />
              ) : (
                <Dashboard user={user} onLogout={handleLogout} />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            user && user.role === "Admin" ? (
              <AdminDashboard user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/users"
          element={
            user && user.role === "Admin" ? (
              <Users user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/bookings"
          element={
            user && user.role === "Admin" ? (
              <Bookings user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/equipment"
          element={
            user && user.role === "Admin" ? (
              <Equipment user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/analytics"
          element={
            user && user.role === "Admin" ? (
              <Analytics user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* OWNER ROUTES */}
        <Route
          path="/owner/dashboard"
          element={
            user && user.role === "Owner" ? (
              <OwnerDashboard user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/owner/equipment"
          element={
            user && user.role === "Owner" ? (
              <MyEquipment user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/owner/requests"
          element={
            user && user.role === "Owner" ? (
              <Requests user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* 🚜 FARMER ROUTES */}
        <Route
          path="/farmer/dashboard"
          element={
            user && user.role === "Farmer" ? (
              <FarmerDashboard user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/farmer/booking"
          element={
            user && user.role === "Farmer" ? (
              <BookingPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/farmer/review"
          element={
            user && user.role === "Farmer" ? (
              <ReviewPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* 🔥 FALLBACK ROUTE (IMPORTANT) */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route
  path="/farmer/history"
  element={
    user && user.role === "Farmer" ? (
      <BookingHistory />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>
      </Routes>
    </div>
  );
}

export default App;