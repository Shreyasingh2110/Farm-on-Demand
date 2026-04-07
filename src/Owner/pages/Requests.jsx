import OwnerSidebar from "../components/OwnerSidebar";
import OwnerNavbar from "../components/OwnerNavbar";

function Requests({ user, onLogout }) {
  const requests = [
    { farmer: "Rahul", equipment: "Tractor", status: "Pending" },
    { farmer: "Priya", equipment: "Harvester", status: "Approved" }
  ];

  return (
    <div className="admin-container">
      <OwnerSidebar />

      <div className="main-section">
        <OwnerNavbar user={user} onLogout={onLogout} />

        <div className="content">
          <h2>Booking Requests</h2>

          <table className="user-table">
            <thead>
              <tr>
                <th>Farmer</th>
                <th>Equipment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req, i) => (
                <tr key={i}>
                  <td>{req.farmer}</td>
                  <td>{req.equipment}</td>
                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Requests;