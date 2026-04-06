import React from 'react';
import FeatureBox from './FeatureBox';

function Features() {
  // This data can later move to a separate file or backend
  const featureData = [
    {
      role: "Farmer",
      features: [
        "Equipment Search & Discovery",
        "Booking Management",
        "Review & Rating"
      ]
    },
    {
      role: "Owner",
      features: [
        "Equipment Management",
        "Booking Approval",
        "Earnings & Transactions"
      ]
    },
    {
      role: "Admin",
      features: [
        "User Management",
        "Equipment/Booking Monitoring",
        "Analytics & Reports"
      ]
    }
  ];

  return (
    <section className="features-section">
      <h2>Platform Modules</h2>
      <div className="feature-list">
        {featureData.map((fd, idx) => (
          <FeatureBox key={idx} role={fd.role} features={fd.features} />
        ))}
      </div>
    </section>
  );
}

export default Features;