import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/usersApiSlice";
import { setCredentials } from "../../features/authSlice";
//import { toast } from "react-toastify";
import styles from "./Login.module.css"

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
      console.log('error');
    }
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>Login</h1>
      <form className={styles.form} onSubmit={createUserHandler}>
        <input className={styles.input} type="email" onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.input} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.btn} disabled={isLoading} type="submit">SingIn</button>
        <p><Link to="/register">create an account</Link></p>
      </form>
    </div>
  );
};
export default LoginCorrect;
