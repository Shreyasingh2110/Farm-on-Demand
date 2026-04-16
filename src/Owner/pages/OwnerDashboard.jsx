// // // import OwnerSidebar from "../components/OwnerSidebar";
// // // import OwnerNavbar from "../components/OwnerNavbar";
// // // import "../style/owner.css";

// // // function OwnerDashboard({ user, onLogout }) {
// // //   return (
// // //     <div className="owner-container">
// // //       <OwnerSidebar />

// // //       <div className="owner-main">
// // //         <OwnerNavbar user={user} onLogout={onLogout} />

// // //         <h1>Owner Dashboard</h1>

// // //         <div className="owner-cards">
// // //           <div className="owner-card">
// // //             <h3>🛠 Equipment</h3>
// // //             <p>10</p>
// // //           </div>

// // //           <div className="owner-card">
// // //             <h3>📦 Requests</h3>
// // //             <p>6</p>
// // //           </div>

// // //           <div className="owner-card">
// // //             <h3>💰 Earnings</h3>
// // //             <p>₹25,000</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default OwnerDashboard;
// import OwnerSidebar from "../components/OwnerSidebar";
// import OwnerNavbar from "../components/OwnerNavbar";
// import "../style/owner.css";

// function OwnerDashboard({ user, onLogout }) {

//   const equipment = JSON.parse(localStorage.getItem("equipment")) || [];
//   const requests = JSON.parse(localStorage.getItem("requests")) || [];

//   return (
//     <div className="owner-container">
//       <OwnerSidebar />

//       <div className="owner-main">
//         <OwnerNavbar user={user} onLogout={onLogout} />

//         <h1>Owner Dashboard</h1>

//         <div className="owner-cards">
//           <div className="owner-card">
//             <h3> Equipment</h3>
//             <p>{equipment.length}</p>
//           </div>

//           <div className="owner-card">
//             <h3> Requests</h3>
//             <p>{requests.length}</p>
//           </div>

//           <div className="owner-card">
//             <h3> Earnings</h3>
//             <p>₹25,000</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OwnerDashboard;
import OwnerLayout from "../components/OwnerLayout";

function OwnerDashboard({ user, onLogout }) {
  const equipment = JSON.parse(localStorage.getItem("equipment")) || [];
  const requests = JSON.parse(localStorage.getItem("requests")) || [];

  return (
    <OwnerLayout user={user} onLogout={onLogout}>
      <h1>Owner Dashboard</h1>

      <div className="owner-cards">
        <div className="owner-card">
          <h3>Equipment</h3>
          <p>{equipment.length}</p>
        </div>

        <div className="owner-card">
          <h3>Requests</h3>
          <p>{requests.length}</p>
        </div>

        <div className="owner-card">
          <h3>Earnings</h3>
          <p>₹25,000</p>
        </div>
      </div>
    </OwnerLayout>
  );
}

export default OwnerDashboard;