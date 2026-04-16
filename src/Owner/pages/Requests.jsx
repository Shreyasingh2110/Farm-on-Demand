// // import OwnerSidebar from "../components/OwnerSidebar";
// // import OwnerNavbar from "../components/OwnerNavbar";
// // import "../style/owner.css";

// // function Requests({ user, onLogout }) {
// //   const requests = [
// //     { farmer: "Rahul", equipment: "Tractor", status: "Pending" },
// //     { farmer: "Priya", equipment: "Harvester", status: "Approved" }
// //   ];

// //   return (
// //     <div className="owner-container">
// //       <OwnerSidebar />

// //       <div className="owner-main">
// //         <OwnerNavbar user={user} onLogout={onLogout} />

// //         <h2>Booking Requests</h2>

// //         <table className="owner-table">
// //           <thead>
// //             <tr>
// //               <th>Farmer</th>
// //               <th>Equipment</th>
// //               <th>Status</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {requests.map((req, i) => (
// //               <tr key={i}>
// //                 <td>{req.farmer}</td>
// //                 <td>{req.equipment}</td>
// //                 <td>{req.status}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Requests;

// import { useState, useEffect } from "react";
// import OwnerSidebar from "../components/OwnerSidebar";
// import OwnerNavbar from "../components/OwnerNavbar";
// import "../style/owner.css";

// function Requests({ user, onLogout }) {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("requests")) || [
//       { id: 1, farmer: "Rahul", equipment: "Tractor", status: "Pending" },
//       { id: 2, farmer: "Priya", equipment: "Harvester", status: "Approved" }
//     ];
//     setRequests(saved);
//   }, []);

//   const updateStatus = (id, status) => {
//     const updated = requests.map((req) =>
//       req.id === id ? { ...req, status } : req
//     );

//     setRequests(updated);
//     localStorage.setItem("requests", JSON.stringify(updated));
//   };

//   return (
//     <div className="owner-container">
//       <OwnerSidebar />

//       <div className="owner-main">
//         <OwnerNavbar user={user} onLogout={onLogout} />

//         <h2>Booking Requests</h2>

//         <table className="owner-table">
//           <thead>
//             <tr>
//               <th>Farmer</th>
//               <th>Equipment</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {requests.map((req) => (
//               <tr key={req.id}>
//                 <td>{req.farmer}</td>
//                 <td>{req.equipment}</td>

//                 <td>
//                   {req.status === "Pending" ? (
//                     <>
//                       <button onClick={() => updateStatus(req.id, "Approved")}>
//                         ✅
//                       </button>
//                       <button onClick={() => updateStatus(req.id, "Rejected")}>
//                         ❌
//                       </button>
//                     </>
//                   ) : (
//                     <span className={`status-${req.status.toLowerCase()}`}>
//                       {req.status}
//                     </span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Requests;
import { useState, useEffect } from "react";
import OwnerLayout from "../components/OwnerLayout";

function Requests({ user, onLogout }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("requests")) || [
      { id: 1, farmer: "Rahul", equipment: "Tractor", status: "Pending" },
      { id: 2, farmer: "Priya", equipment: "Harvester", status: "Approved" }
    ];
    setRequests(saved);
  }, []);

  const updateStatus = (id, status) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status } : req
    );

    setRequests(updated);
    localStorage.setItem("requests", JSON.stringify(updated));
  };

  return (
    <OwnerLayout user={user} onLogout={onLogout}>
      <h2>Booking Requests</h2>

      <table className="owner-table">
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Equipment</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td>{req.farmer}</td>
              <td>{req.equipment}</td>

              <td>
                {req.status === "Pending" ? (
                  <>
                    <button onClick={() => updateStatus(req.id, "Approved")}>
                      Approve
                    </button>
                    <button onClick={() => updateStatus(req.id, "Rejected")}>
                      Reject
                    </button>
                  </>
                ) : (
                  <span className={`status-${req.status.toLowerCase()}`}>
                    {req.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </OwnerLayout>
  );
}

export default Requests;