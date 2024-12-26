import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "../../features/authSlice";
//import { toast } from "react-toastify";

export default function PasswordChange() {
  const [password, setPassword] = useState();
  
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    password: "",
    password2: "",
  });
  
  const { email, currentPassword, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      //    toast.error("Password do not match");
    } else {
      try {
        const userData = { email, currentPassword, newPassword: password};
        await dispatch(changePassword(userData));
        navigate("/sign-up");
      } catch (error) {
        //     toast.error(error.data);
      }
    }
  };

  return (
    <div className=" mx-auto col-9 col-sm-6 col-md-4 col-lg-4 col-xl-3">
      <div className="d-block">
        <div>
          <h1 className="text-center">Логін</h1>
          <div
            className="form-floating mb-3 d-block"
            // onSubmit={}
          >
            <input
              type="email"
              className="form-control border border-1 border-black"
              id="email"
              name="email"
              onChange={onChange}
              placeholder=""
            />
            <label htmlFor="email">Ел. пошта</label>
          </div>
          <div className="form-floating mb-3" 
          // onSubmit={}
          >
            <input
              type="password"
              className="form-control border border-1 border-black"
              name="currentPassword"
              id="currentPassword"
              onChange={onChange}
              placeholder=""
              required
              
            />
            <label htmlFor="password">Старий пароль</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control border border-1 border-black"
              //value={password}
              placeholder=""
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Придумайте пароль</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              name="password2"
              id="passwordConfirm"
              className="form-control border border-1 border-black"
              value={password2}
              placeholder=""
              required
              onChange={onChange}
            />
            <label htmlFor="passwordConfirm">Підтвердіть пароль</label>
          </div>
          <div className="mx-auto d-grid col-6">
            <button
              className="btn btn-primary text-center"
              // disabled={}
              onClick={onSubmit}
            >
              Підтвердити
            </button>
          </div>
          <p className="text-center">
            <Link to="/sign-up">Скасувати</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
