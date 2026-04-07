import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('authUser');
    if (!saved) {
      return null;
    }
    try {
      return JSON.parse(saved);
    } catch (error) {
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
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
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
        <Route path='/admin/dashboard' element={
          user && user.role === "Admin" ?(
            <AdminDashboard user={user} onLogout={handleLogout} />
          ):(
            <Navigate to='/login' replace />
          )
        }
        />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/equipment" element={<Equipment />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;