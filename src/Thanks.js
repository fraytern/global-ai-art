import React from 'react';
import './Thanks.css'; // Import CSS file for this component

function Thanks() {
  return (
    <div className="thank-you-container">
      <h2>Thank You For Your Payment!</h2>
      <p>Your payment has been successfully processed.</p>
      <button className="return-button" onClick={() => window.location.href='/'}>Return to Home</button>
    </div>
  );
}

export default Thanks;
