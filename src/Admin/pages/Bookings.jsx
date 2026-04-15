import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Bookings.css";

function Bookings({ user, onLogout }) {

  const [bookings, setBookings] = useState([
    { id: 1, user: "Shreya", equipment: "Tractor", date: "2026-04-07", status: "Pending" },
    { id: 2, user: "Rahul", equipment: "Plough", date: "2026-04-06", status: "Approved" }
  ]);

  const [newBooking, setNewBooking] = useState({
    user: "",
    equipment: "",
    date: "",
    status: "Pending"
  });

  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    if (!newBooking.user || !newBooking.equipment || !newBooking.date) {
      alert("Fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      ...newBooking
    };

    setBookings([...bookings, newItem]);
    setNewBooking({ user: "", equipment: "", date: "", status: "Pending" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  const handleApprove = (id) => {
    setBookings(
      bookings.map(b =>
        b.id === id ? { ...b, status: "Approved" } : b
      )
    );
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="bookings">
          <h2>Bookings Management</h2>

          {/* ADD BUTTON */}
          

          {/* FORM */}
          {showForm && (
            <div className="form">
              <input
                type="text"
                placeholder="User Name"
                value={newBooking.user}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, user: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Equipment"
                value={newBooking.equipment}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, equipment: e.target.value })
                }
              />

              <input
                type="date"
                value={newBooking.date}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, date: e.target.value })
                }
              />

              <button onClick={handleAdd}>Save</button>
            </div>
          )}

          {/* TABLE */}
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Equipment</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>{b.user}</td>
                  <td>{b.equipment}</td>
                  <td>{b.date}</td>

                  <td className={`status ${b.status}`}>
                    {b.status}
                  </td>

                  <td>
                    {b.status === "Pending" && (
                      <button
                        className="approve-btn"
                        onClick={() => handleApprove(b.id)}
                      >
                        Approve
                      </button>
                    )}

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(b.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="add-btn" onClick={() => setShowForm(!showForm)}>
            Add Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bookings;