import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/farmer.css";

const BookingPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [days, setDays] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  if (!state) {
    return <h2>No Equipment Selected</h2>;
  }

  const totalPrice = state.price * days;

  const handleBooking = () => {
    // ✅ Validation
    if (!date) {
      setError("Please select a date");
      return;
    }

    if (days < 1) {
      setError("Days must be at least 1");
      return;
    }

    setError("");

    // ✅ Save booking (localStorage for now)
    const booking = {
      equipment: state.name,
      price: state.price,
      location: state.location,
      date,
      days,
      totalPrice,
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    setConfirmed(true);
  };

  return (
    <div className="farmer-container">

      {/* Navbar */}
      <div className="navbar">
        <h2>📅 Booking Page</h2>
        <button onClick={() => navigate("/farmer/dashboard")} className="logout-btn">
          Back
        </button>
      </div>

      <div className="booking-card">
        <h2>{state.name}</h2>
        <p><strong>Price per day:</strong> ₹{state.price}</p>
        <p><strong>Location:</strong> {state.location}</p>

        {/* Date */}
        <label>Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Days */}
        <label>Number of Days:</label>
        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <h3>Total Price: ₹{totalPrice}</h3>

        {/* Error */}
        {error && <p className="error">{error}</p>}

        {!confirmed ? (
          <button onClick={handleBooking}>Confirm Booking</button>
        ) : (
          <>
            <p className="success">✅ Booking Confirmed!</p>

            {/* Booking Summary */}
            <div className="summary">
              <p><strong>Equipment:</strong> {state.name}</p>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Days:</strong> {days}</p>
              <p><strong>Total:</strong> ₹{totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;