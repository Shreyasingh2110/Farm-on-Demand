function OwnerNavbar({ user, onLogout }) {
  return (
    <div className="navbar">
      <h3>Welcome, {user?.email}</h3>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default OwnerNavbar;