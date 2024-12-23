import { Fragment, useState } from "react";
//import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/usersApiSlice";
import { setCredentials } from "../../features/authSlice";
// import styles from "./Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register] = useRegisterMutation();

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
        const userData = { name, email, password };
        const res = await register(userData).unwrap();
        dispatch(setCredentials(res));
        navigate("/");
      } catch (error) {
        //     toast.error(error.data);
      }
    }
  };

  return (
    <Fragment>
      <div className=" mx-auto col-9 col-sm-6 col-md-4 col-lg-4 col-xl-3">
        <div className="text-center">
          <h1>Реєстрація</h1>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control border border-1 border-black"
            value={name}
            placeholder=""
            required
            onChange={onChange}
          />
          <label htmlFor="name">Ім'я</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control border border-1 border-black"
            value={email}
            placeholder=""
            required
            onChange={onChange}
          />
          <label htmlFor="email">Ел. пошта</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password"
            id="password"
            className="form-control border border-1 border-black"
            value={password}
            placeholder=""
            required
            onChange={onChange}
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
          <div className="btn btn-primary text-center" onClick={onSubmit}>
            Create
          </div>
        </div>
        <p className="text-center">
          Вже маєте аккаунт?
          <Link to="/login">Увійти</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Register;
