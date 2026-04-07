import OwnerSidebar from "../components/OwnerSidebar";
import OwnerNavbar from "../components/OwnerNavbar";

function OwnerDashboard({ user, onLogout }) {
  return (
    <div className="admin-container">
      <OwnerSidebar />

      <div className="main-section">
        <OwnerNavbar user={user} onLogout={onLogout} />

        <div className="content">
          <h1>Owner Dashboard</h1>

          <div className="card-container">
            <div className="card">
              <h3> My Equipment</h3>
              <p>10</p>
            </div>

            <div className="card">
              <h3> Requests</h3>
              <p>6</p>
            </div>

            <div className="card">
              <h3> Earnings</h3>
              <p>₹25,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;