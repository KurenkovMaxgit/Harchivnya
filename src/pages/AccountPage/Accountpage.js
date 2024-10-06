import React from "react";
import "./AccountPage.css"
 
const SignUp = () => {
    return (
    <div className="account-page">
      <div className="account-info">
        <h2>Personal Information</h2>
        <div className="info-item">
          <span><strong>Name:</strong> даун</span>
          <span><strong>Surname:</strong> даунович</span>
          <span><strong>Phone:</strong> +5252252525</span>
        </div>
        <div className="button-info">
        <button>Edit Info</button> {/*короче как-то потом ебля єто */}
        </div>
      </div>

      <div className="purchase-history">
        <h2>Purchase History</h2>
        <ul>
        </ul>
      </div>

      <div className="extra-section">
        <h2>Additional Info</h2>
        <div><button>Change Password</button></div>{/*тут допридуміваем чота */}
        <div><button>Support</button></div>
      </div>
    </div>
    );
};
 
export default SignUp;