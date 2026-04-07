import React, { useEffect, useState } from "react";
import EquipmentCard from "../components/EquipmentCard";
import { useNavigate } from "react-router-dom";
import "../styles/farmer.css";

const FarmerDashboard = ({ onLogout }) => {
  const [equipment, setEquipment] = useState([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Dummy data (later replace with API)
    setEquipment([
      { id: 1, name: "Tractor", price: 1000, location: "Delhi" },
      { id: 2, name: "Harvester", price: 2000, location: "Punjab" },
      { id: 3, name: "Plough", price: 500, location: "Haryana" },
    ]);
  }, []);

  const handleBooking = (item) => {
    navigate("/farmer/booking", { state: item });
  };

  // 🔍 Filtering logic
  const filteredData = equipment.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (locationFilter === "" || item.location === locationFilter)
    );
  });

  return (
    <div className="farmer-container">

      {/* Navbar */}
      <div className="navbar">
        <h2>🚜 Farmer Dashboard</h2>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-card">
          <h3>{equipment.length}</h3>
          <p>Total Equipment</p>
        </div>
        <div className="stat-card">
          <h3>2</h3>
          <p>Active Bookings</p>
        </div>
        <div className="stat-card">
          <h3>1</h3>
          <p>Pending Requests</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome">
        <h1>Welcome Farmer 👋</h1>
        <p>Find and book equipment easily</p>
      </div>

      {/* Search + Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search equipment..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-dropdown"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Punjab">Punjab</option>
          <option value="Haryana">Haryana</option>
        </select>
      </div>

      {/* Equipment Section */}
      <h2 className="section-title">Available Equipment</h2>

      <div className="grid">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <EquipmentCard
              key={item.id}
              item={item}
              onBook={handleBooking}
            />
          ))
        ) : (
          <p className="no-data">No equipment found 😔</p>
        )}
        <button onClick={() => navigate("/farmer/history")} className="logout-btn">
  History
</button>
      </div>
    </div>
  );
};

export default FarmerDashboard;