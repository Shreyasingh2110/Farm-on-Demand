import React from 'react';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <div className="cta">
      <Link className="cta-btn" to="/login">Get Started</Link>
      <Link className="cta-btn cta-outline" to="/login">Login</Link>
    </div>
  );
}
export default CTA;