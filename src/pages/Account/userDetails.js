import React from "react";
import { useSelector } from "react-redux";
import { selectDetails } from "../../features/userSlice";

function UserDetails() {
  const details = useSelector(selectDetails);
  const address = details?.adress
  ? `${details.adress.street || ""}, ${details.adress.entrance || ""}, ${details.adress.floor || ""}, ${details.adress.apartment || ""}`
  : "Адреса відсутня";
  return (
    <div className="card-body">
      <h2 className="mb-3">Персональна інформація</h2>
      <div className="row">
        <div className="col-sm-6">
          <p className="mb-2">Повне ім'я</p>
        </div>
        <div className="col-sm-6">
          <p className="text-muted mb-0">{details.name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <p className="mb-2">Ел. пошта</p>
        </div>
        <div className="col-sm-6">
          <p className="text-muted mb-0">{details.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <p className="mb-2">Телефон</p>
        </div>
        <div className="col-sm-6">
          <p className="text-muted mb-0">{details.phone}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <p className="mb-2">Вулиця</p>
        </div>
        <div className="col-sm-6">
          <p className="text-muted mb-0">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
