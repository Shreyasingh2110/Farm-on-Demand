// // import { NavLink } from "react-router-dom";

// // function OwnerSidebar() {
// //   return (
// //     <div className="owner-sidebar">
// //       <h2>Owner Panel</h2>

// //       <NavLink to="/owner/dashboard" className="owner-link">
// //         Dashboard
// //       </NavLink>

// //       <NavLink to="/owner/equipment" className="owner-link">
// //         My Equipment
// //       </NavLink>

// //       <NavLink to="/owner/requests" className="owner-link">
// //         Booking Requests
// //       </NavLink>
// //     </div>
// //   );
// // }

// // export default OwnerSidebar;
// import { NavLink } from "react-router-dom";

// function OwnerSidebar() {
//   return (
//     <div className="owner-sidebar">
//       <h2>Owner Panel</h2>

//       <NavLink to="/owner/dashboard" className="owner-link">
//         Dashboard
//       </NavLink>

//       <NavLink to="/owner/equipment" className="owner-link">
//         My Equipment
//       </NavLink>

//       <NavLink to="/owner/requests" className="owner-link">
//         Booking Requests
//       </NavLink>
//     </div>
//   );
// }

// export default OwnerSidebar;
import { NavLink } from "react-router-dom";

function OwnerSidebar() {
  return (
    <div className="owner-sidebar">
      <h2>Owner Panel</h2>

      <NavLink
        to="/owner/dashboard"
        className={({ isActive }) =>
          isActive ? "owner-link active" : "owner-link"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/owner/equipment"
        className={({ isActive }) =>
          isActive ? "owner-link active" : "owner-link"
        }
      >
        My Equipment
      </NavLink>

      <NavLink
        to="/owner/requests"
        className={({ isActive }) =>
          isActive ? "owner-link active" : "owner-link"
        }
      >
        Booking Requests
      </NavLink>
    </div>
  );
}

export default OwnerSidebar;