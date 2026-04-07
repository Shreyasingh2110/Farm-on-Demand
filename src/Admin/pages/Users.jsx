import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Users.css";

function Users({ user, onLogout }) {
  const [users, setUsers] = useState([
    { name: "Shreya", email: "shreya@gmail.com", role: "Admin" },
    { name: "Rahul", email: "rahul@gmail.com", role: "User" }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User"
  });

  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  // FILTER + SEARCH
  const filteredUsers = users.filter((u) => {
    return (
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())) &&
      (filterRole === "All" || u.role === filterRole)
    );
  });

  // ADD OR EDIT USER
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = formData;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, formData]);
    }

    setFormData({ name: "", email: "", role: "User" });
    setShowForm(false);
  };

  // DELETE USER
  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
  };

  // EDIT USER
  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Navbar user={user} onLogout={onLogout} />

        <div className="users-container">
          <h2>Users</h2>

          {/* SEARCH + FILTER */}
          <div className="controls">
            <input
              type="text"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option>All</option>
              <option>Admin</option>
              <option>User</option>
              <option>Farmer</option>
            </select>
          </div>

          {/* TABLE */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((u, index) => (
                <tr key={index}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ADD BUTTON */}
          <button className="add-btn" onClick={() => setShowForm(true)}>
            Add User
          </button>

          {/* FORM */}
          {showForm && (
            <div className="form-popup">
              <form onSubmit={handleSubmit}>
                <h3>{editIndex !== null ? "Edit User" : "Add User"}</h3>

                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                >
                  <option>Admin</option>
                  <option>User</option>
                  <option>Farmer</option>
                </select>

                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;