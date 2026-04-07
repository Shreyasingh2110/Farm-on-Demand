import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import AdminDashboard from './Admin/pages/AdminDashboard';
import Analytics from './Admin/pages/Analytics';
import Bookings from './Admin/pages/Bookings';
import Equipment from './Admin/pages/Equipment';
import Users from './Admin/pages/Users';

function App() {
  const navigate = useNavigate(); // 🔥 ADD THIS

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('authUser');
    if (!saved) return null;

    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem('authUser');
      return null;
    }
  });

  const handleLogin = (nextUser) => {
    setUser(nextUser);
    localStorage.setItem('authUser', JSON.stringify(nextUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
    navigate("/login"); // 🔥 FIX: redirect after logout
  };

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* USER DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ADMIN DASHBOARD */}
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

        {/* 🔥 PROTECTED ADMIN PAGES */}
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

      </Routes>
    </div>
  );
}

export default App;