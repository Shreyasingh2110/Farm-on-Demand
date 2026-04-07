import { useState, useEffect } from "react";

function Navbar({ user, onLogout }) {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="navbar">
      <h3 className="head">Welcome! {user?.name || "Admin"}</h3>

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