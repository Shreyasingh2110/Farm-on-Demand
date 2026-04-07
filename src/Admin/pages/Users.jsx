import React, { useState } from "react";
import "../styles/admin.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Users({ user, onLogout }) {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState([
    { name: "Shreya", email: "shreya@gmail.com", role: "Admin" },
    { name: "Priya", email: "priya@gmail.com", role: "Admin" },
    { name: "Rahul", email: "rahul@gmail.com", role: "Farmer" },
    { name: "Krishna", email: "kp@gmail.com", role: "Owner" },
    { name: "Ittishree", email: "ittishree@gmail.com", role: "Owner" },
    { name: "Purabi", email: "purabi@gmail.com", role: "Farmer" },
    { name: "Saipriti", email: "saipriti@gmail.com", role: "Owner" },
    { name: "Ranit", email: "ranit@gmail.com", role: "Farmer" },
    { name: "Ashish", email: "ashish@gmail.com", role: "Owner" },
    { name: "Nishit", email: "nishit@gmail.com", role: "Farmer" }
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Owner"
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return;

    setUsers([...users, newUser]);
    setNewUser({ name: "", email: "", role: "Owner" });
    setShowModal(false);
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-section">
        <Navbar user={user} onLogout={onLogout} />

        <div className="content">
          <h2>Users</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search users..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Table */}
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((u, index) => (
                  <tr key={index}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <span
                        className={
                            u.role === "Admin"
                            ? "badge admin"
                            : u.role === "Farmer"
                            ? "badge farmer"
                            : u.role === "Owner"
                            ? "badge owner"
                            : "badge user"
                        }
                      >
                        {u.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <p className="no-data">No users found</p>
            )}
          </div>

          {/* ADD BUTTON BELOW TABLE */}
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <button
              className="primary-btn"
              onClick={() => setShowModal(true)}
            >
              + Add User
            </button>
          </div>

          {/* MODAL */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h3>Add New User</h3>

                <input
                  type="text"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />

                <select
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                >
                  <option>Owner</option>
                  <option>Admin</option>
                  <option>Farmer</option>
                </select>

                <div className="modal-actions">
                  <button onClick={handleAddUser} className="primary-btn">
                    Add
                  </button>
                  <button onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;