import React from "react";

const EquipmentCard = ({ item, onBook }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>

      <p><strong>Price:</strong> ₹{item.price}/day</p>
      <p><strong>Location:</strong> {item.location}</p>

      <button onClick={() => onBook(item)}>
        Book Now
      </button>
    </div>
  );
};

export default EquipmentCard;