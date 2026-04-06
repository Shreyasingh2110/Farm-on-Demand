import React from 'react';

function FeatureBox({ role, features }) {
  return (
    <div className="feature-box">
      <h3>{role}</h3>
      <ul>
        {features.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
    </div>
  );
}
export default FeatureBox;