import React from "react";
import "./Account.css"
import { Navigate } from "react-router-dom";
import  { useState } from "react";

const Account = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);
  
  const handleRedirect = () => {
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate to="/login" />;
  }
    return (
    <div className="account-page">
      <div className="account-info">
        <h2>Personal Information</h2>
        <div className="info-item">
          <span><strong>Name:</strong> </span>
          <span><strong>Surname:</strong> </span>
          <span><strong>Phone:</strong> </span>
        </div>
        <div className="button-info">
        <button>Edit Info</button>
        </div>
      </div>
      <div className="purchase-history">
        <h2>Purchase History</h2>
        <ul>
        </ul>
      </div>
      <div className="extra-section">
        <h2>Additional Info</h2>
        <div><button onClick={handleRedirect}>Change Password</button></div>
        <div><button>Support</button></div>
      </div>
    </div>
    );
};
 
export default Account;