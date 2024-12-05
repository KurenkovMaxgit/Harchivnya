import React from "react";
//import "./Account.css"
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
    <div class="container">
      <div class="row col-12 mx-auto row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <div class="col mb-3">
          <div class="card">
            <div class="card-body">
              <h2 class="mb-3">Personal Information</h2>
              <div class="row">
                <div class="col-sm-6">
                  <p class="mb-2">Full Name</p>
                </div>
                <div class="col-sm-6">
                  <p class="text-muted mb-0">Johnatan Smith</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="mb-2">Email</p>
                </div>
                <div class="col-sm-6">
                  <p class="text-muted mb-0">example@example.com</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="mb-2">Phone</p>
                </div>
                <div class="col-sm-6">
                  <p class="text-muted mb-0">(097) 234-5678</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="mb-2">Mobile</p>
                </div>
                <div class="col-sm-6">
                  <p class="text-muted mb-0">(098) 765-4321</p>
                </div>
              </div>
            </div>
            <div class="row row-cols-2">
              <div class="col">
                <a href="/" class="btn btn-primary col-12">
                  Edit information
                </a>
              </div>
              <div class="col">
                <div class="btn btn-primary col-12" onClick={handleRedirect}>
                  Change password
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <div class="card">
            <div class="card-body">
              <h2>Purchase History</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
