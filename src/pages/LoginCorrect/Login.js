import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/usersApiSlice";
import { setCredentials } from "../../features/authSlice";
//import { toast } from "react-toastify";
import styles from "./Login.module.css";

const LoginCorrect = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const createUserHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials(res));
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div class=" mx-auto col-9 col-sm-6 col-md-4 col-lg-4 col-xl-3">
      <div className="d-block">
        <div>
          <h1 className="text-center">Login</h1>
          <div
            className="form-floating mb-3 d-block"
            onSubmit={createUserHandler}
          >
            <input
              type="email"
              className="form-control border border-1 border-black"
              id="floatingInput"
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
            />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3" onSubmit={createUserHandler}>
            <input
              type="password"
              className="form-control border border-1 border-black"
              id="floatingInput"
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
            />
            <label for="floatingInput">Password</label>
          </div>
          <div className="mx-auto d-grid col-6">
            <a
              className="btn btn-primary text-center"
              disabled={isLoading}
              type="submit"
            >
              SingIn
            </a>
          </div>
          <p className="text-center">
            <Link to="/register">create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginCorrect;