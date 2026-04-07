import { useState } from "react";
import OwnerSidebar from "../components/OwnerSidebar";
import OwnerNavbar from "../components/OwnerNavbar";

function MyEquipment({ user, onLogout }) {
  const [equipment, setEquipment] = useState([
    { name: "Tractor", qty: 2 },
    { name: "Harvester", qty: 1 }
  ]);

  return (
    <div className="admin-container">
      <OwnerSidebar />

      <div className="main-section">
        <OwnerNavbar user={user} onLogout={onLogout} />

        <div className="content">
          <h2>My Equipment</h2>

          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {equipment.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyEquipment;