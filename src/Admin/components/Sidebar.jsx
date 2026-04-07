import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Admin</h1>

      <NavLink to="/admin/dashboard" className="link">
        Dashboard
      </NavLink>

      <NavLink to="/admin/users" className="link">
        Users
      </NavLink>

      <NavLink to="/admin/bookings" className="link">
        Bookings
      </NavLink>

      <NavLink to="/admin/equipment" className="link">
        Equipment
      </NavLink>

      <NavLink to="/admin/analytics" className="link">
        Analytics
      </NavLink>
    </div>
  );
}

export default Sidebar;