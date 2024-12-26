import React, { useEffect, useState } from "react";
//import "./Account.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken } from "../../features/authSlice";
import EditForm from "./editForm";
import UserDetails from "./userDetails";
//import { selectDetails } from "../../features/userSlice";

const Account = () => {
  //const userDetails = useSelector(selectDetails)
  //console.log(userDetails)
  const dispatch = useDispatch()
  const [editState, setEditState] = useState(false);

  const token = useSelector(selectToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div className="container">
      <div className="row col-12 mx-auto row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-1">
        <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              {editState ? <EditForm /> : <UserDetails />}
            </div>
            <div className="row row-cols-2"></div>
          </div>
          <div className="row cols-2">
            {editState ? (
              <div className="col pt-3">
                <button
                  className="btn btn-primary col-12"
                  onClick={() => setEditState(false)}
                >
                  Відмінити
                </button>
              </div>
            ) : (
              <>
                <div className="col pt-3">
                  <button
                    className="btn btn-primary col-12"
                    onClick={() => setEditState(true)}
                  >
                    Змінити інформацію
                  </button>
                </div>

                <div className="col pt-3">
                  <div
                    className="btn btn-primary col-12"
                    onClick={() => navigate("/passwordChange")}
                  >
                    Змінити пароль
                  </div>
                </div>
                <div className="row">

                <div className="mx-auto col-6 pt-3">
                  <div
                    className="btn btn-danger btn-primary col-12"
                    onClick={() => {dispatch(logout()); navigate("/")}}
                    >
                    Вийти
                  </div>
                    </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              <h2>Історія замовлень</h2>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Account;
