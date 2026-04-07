import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/farmer.css";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div className="farmer-container">

      {/* Navbar */}
      <div className="navbar">
        <h2>📜 Booking History</h2>
        <button onClick={() => navigate("/farmer/dashboard")} className="logout-btn">
          Back
        </button>
      </div>

      <h2 className="section-title">Your Bookings</h2>

      <div className="grid">
        {bookings.length > 0 ? (
          bookings.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.equipment}</h3>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Days:</strong> {item.days}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Total:</strong> ₹{item.totalPrice}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No bookings yet 😔</p>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;