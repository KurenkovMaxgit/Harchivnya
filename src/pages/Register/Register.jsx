import { Fragment, useState, useEffect } from "react";
//import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/usersApiSlice";
import { setCredentials } from "../../features/authSlice";
import  styles  from "./Register.module.css";

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
  const [register, { isLoading }] = useRegisterMutation();

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
      <section className={styles.header}>
        <h1>Register</h1>
        <p>Please create an account</p>
      </section>
      <section className={styles.form}>
        <form onSubmit={onSubmit}>
          <div className={styles["form-group"]}>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={name}
              placeholder="Enter your name"
              required
              onChange={onChange}
            />
          </div>
          <div className={styles["form-group"]}>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={email}
              placeholder="Enter your email"
              required
              onChange={onChange}
            />
          </div>
          <div className={styles["form-group"]}>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              placeholder="Enter your password"
              required
              onChange={onChange}
            />
          </div>
          <div className={styles["form-group"]}>
            <input
              type="password"
              name="password2"
              id="password2"
              className="form-control"
              value={password2}
              placeholder="Confirm password"
              required
              onChange={onChange}
            />
          </div>
          <div className={styles["form-group"]}>
            <button className={styles.btn}>Create</button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Register;
