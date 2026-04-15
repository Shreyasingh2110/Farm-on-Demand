// import { useState } from "react";
// import OwnerSidebar from "../components/OwnerSidebar";
// import OwnerNavbar from "../components/OwnerNavbar";
// import "../style/owner.css";

// function MyEquipment({ user, onLogout }) {
//   const [equipment] = useState([
//     { name: "Tractor", qty: 2 },
//     { name: "Harvester", qty: 1 }
//   ]);

//   return (
//     <div className="owner-container">
//       <OwnerSidebar />

//       <div className="owner-main">
//         <OwnerNavbar user={user} onLogout={onLogout} />

//         <h2>My Equipment</h2>

//         <table className="owner-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Quantity</th>
//             </tr>
//           </thead>

//           <tbody>
//             {equipment.map((item, i) => (
//               <tr key={i}>
//                 <td>{item.name}</td>
//                 <td>{item.qty}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default MyEquipment;
import { useState, useEffect } from "react";
import OwnerSidebar from "../components/OwnerSidebar";
import OwnerNavbar from "../components/OwnerNavbar";
import "../style/owner.css";

function MyEquipment({ user, onLogout }) {
  const [equipment, setEquipment] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("equipment")) || [];
    setEquipment(saved);
  }, []);

  const addEquipment = () => {
    if (!name || !qty) return;

    const updated = [...equipment, { name, qty }];
    setEquipment(updated);
    localStorage.setItem("equipment", JSON.stringify(updated));

    setName("");
    setQty("");
  };

  return (
    <div className="owner-container">
      <OwnerSidebar />

      <div className="owner-main">
        <OwnerNavbar user={user} onLogout={onLogout} />

        <h2>My Equipment</h2>

        <div className="form">
          <input
            placeholder="Equipment Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <button onClick={addEquipment}>Add</button>
        </div>

        <table className="owner-table">
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
  );
}

export default MyEquipment;