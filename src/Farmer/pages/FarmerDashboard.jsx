import React, { useEffect, useState } from "react";
import EquipmentCard from "../components/EquipmentCard";
import { useNavigate } from "react-router-dom";
import "../styles/farmer.css";

const FarmerDashboard = ({ onLogout }) => {
  const [equipment, setEquipment] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEquipment([
      { id: 1, name: "Tractor", price: 1000, location: "Delhi" },
      { id: 2, name: "Harvester", price: 2000, location: "Punjab" },
      { id: 3, name: "Plough", price: 500, location: "Haryana" },
    ]);
  }, []);

  const handleBooking = (item) => {
    navigate("/farmer/booking", { state: item });
  };

  const filteredData = equipment.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="farmer-container">

      {/* Navbar */}
      <div className="navbar">
        <h2>🚜 Farmer Dashboard</h2>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card">Total Equipment: {equipment.length}</div>
        <div className="stat-card">Active Bookings: 2</div>
        <div className="stat-card">Pending Requests: 1</div>
      </div>

      {/* Welcome */}
      <div className="welcome">
        <h1>Welcome Farmer 👋</h1>
        <p>Find and book equipment easily</p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search equipment..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Equipment */}
      <h2 className="section-title">Available Equipment</h2>

      <div className="grid">
        {filteredData.map((item) => (
          <EquipmentCard
            key={item.id}
            item={item}
            onBook={handleBooking}
          />
        ))}
      </div>
      <button onClick={() => navigate("/farmer/history")} className="logout-btn">
  History
</button>
    </div>
  );
};

export default FarmerDashboard;