import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Equipment.css";

function Equipment({ user, onLogout }) {

  const [equipmentList, setEquipmentList] = useState([
    { id: 1, name: "Tractor", type: "Heavy", status: "Available" },
    { id: 2, name: "Plough", type: "Tool", status: "In Use" },
    { id: 3, name: "Harvester", type: "Machine", status: "Maintenance" }
  ]);

  const [newEquipment, setNewEquipment] = useState({
    name: "",
    type: "",
    status: "Available"
  });

  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    if (!newEquipment.name || !newEquipment.type) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      ...newEquipment
    };

    setEquipmentList([...equipmentList, newItem]);

    setNewEquipment({ name: "", type: "", status: "Available" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setEquipmentList(equipmentList.filter(item => item.id !== id));
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="equipment">
          <h2>Equipment Management</h2>

          

          {/* FORM */}
          {showForm && (
            <div className="form">
              <input
                type="text"
                placeholder="Equipment Name"
                value={newEquipment.name}
                onChange={(e) =>
                  setNewEquipment({ ...newEquipment, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Type"
                value={newEquipment.type}
                onChange={(e) =>
                  setNewEquipment({ ...newEquipment, type: e.target.value })
                }
              />

              <select
                value={newEquipment.status}
                onChange={(e) =>
                  setNewEquipment({ ...newEquipment, status: e.target.value })
                }
              >
                <option>Available</option>
                <option>In Use</option>
                <option>Maintenance</option>
              </select>

              <button onClick={handleAdd}>Save</button>
            </div>
          )}

          {/* TABLE */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {equipmentList.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td className={`status ${item.status.replace(" ", "")}`}>
                    {item.status}
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="add-btn" onClick={() => setShowForm(!showForm)}>
            Add Equipment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Equipment;