// // function OwnerNavbar({ user, onLogout }) {
// //   return (
// //     <div className="owner-navbar">
// //       <h3>Welcome, {user?.email}</h3>

// //       <button className="owner-logout" onClick={onLogout}>
// //         Logout
// //       </button>
// //     </div>
// //   );
// // }

// // export default OwnerNavbar;
// function OwnerNavbar({ user, onLogout }) {
//   return (
//     <div className="owner-navbar">
//       <h3>Welcome, {user?.email}</h3>

//       <button className="owner-logout" onClick={onLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default OwnerNavbar;
function OwnerNavbar({ user, onLogout }) {
  return (
    <div className="owner-navbar">
      <h3>Welcome, {user?.email}</h3>

      <button className="owner-logout small-btn" onClick={onLogout}>
  Logout
</button>
    </div>
  );
}

export default OwnerNavbar;