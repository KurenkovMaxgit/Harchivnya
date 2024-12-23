import React from "react";
//import "./Account.css"
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../features/authSlice";

const Account = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const token = useSelector(selectToken);

  const handleRedirect = () => {
    setRedirectToHome(true);
  };
  if (token === null) {
    return <Navigate to="/login" />;
  }
  if (redirectToHome) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container">
      <div className="row col-12 mx-auto row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="mb-3">Персональна інформація</h2>
              <div className="row">
                <div className="col-sm-6">
                  <p className="mb-2">Повне ім'я</p>
                </div>
                <div className="col-sm-6">
                  <p className="text-muted mb-0">Johnatan Smith</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="mb-2">Ел. пошта</p>
                </div>
                <div className="col-sm-6">
                  <p className="text-muted mb-0">example@example.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="mb-2">Телефон</p>
                </div>
                <div className="col-sm-6">
                  <p className="text-muted mb-0">(097) 234-5678</p>
                </div>
              </div>
            </div>
            <div className="row row-cols-2"></div>
          </div>
          <div className="row cols-2">
            <div className="col pt-3">
              <a href="/" className="btn btn-primary col-12">
                Змінити інформацію
              </a>
            </div>
            <div className="col pt-3">
              <div className="btn btn-primary col-12" onClick={handleRedirect}>
                Змінити пароль
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              <h2>Історія замовлень</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
