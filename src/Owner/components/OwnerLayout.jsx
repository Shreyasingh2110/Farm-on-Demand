import OwnerSidebar from "./OwnerSidebar";
import OwnerNavbar from "./OwnerNavbar";
import "../style/owner.css";

function OwnerLayout({ children, user, onLogout }) {
  return (
    <div className="owner-container">
      <OwnerSidebar />

      <div className="owner-main">
        <OwnerNavbar user={user} onLogout={onLogout} />

        <div className="owner-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default OwnerLayout;