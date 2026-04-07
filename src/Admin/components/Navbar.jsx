import { useState, useEffect } from "react";

function Navbar({ user, onLogout }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="navbar">

      <h2 id="he">Welcome! {user?.name || "Admin"}</h2>

      <div className="nav-actions">

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar;