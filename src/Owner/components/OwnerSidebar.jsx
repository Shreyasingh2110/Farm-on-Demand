import { NavLink } from "react-router-dom";

function OwnerSidebar() {
  return (
    <div className="sidebar">
      <h2>Owner</h2>

      <NavLink to="/owner/dashboard" className="link">
        Dashboard
      </NavLink>

      <NavLink to="/owner/equipment" className="link">
        My Equipment
      </NavLink>

      <NavLink to="/owner/requests" className="link">
        Booking Requests
      </NavLink>
    </div>
  );
}

export default OwnerSidebar;