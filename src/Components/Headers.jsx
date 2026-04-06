import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-pill">Trusted by rural co-ops nationwide</span>
        <h1>Farm OnDemand</h1>
        <p>
          Book verified equipment, schedule field work, and manage earnings in
          one platform built for farmers, owners, and administrators.
        </p>
        <div className="hero-highlights">
          <div>
            <strong>1800+</strong>
            <span>Listings verified</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Average owner rating</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Support with live updates</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;