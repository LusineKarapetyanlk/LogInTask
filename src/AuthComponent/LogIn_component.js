import { useEffect, useState } from "react";
import classes from "./AuthComponent.module.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/logIn";

const LogInComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    remember_me : false
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.login );

  useEffect(()=>{
    setErrorMessage(error ?  "please try agan!" : '')
  },[error])
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData.email, userData.password));
  };
const nav =()=>navigate("../")
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrorMessage('')
  };
  return (
    <div className={classes.wrapper}>
      <form className={classes.forms} onSubmit={onSubmit}>
        <button className={classes.closeBut} onClick={nav}>
          X
        </button>
        <h3>Log In</h3>

        <div className={classes.input_label}>
          <label>Email address</label> 
          <input
            value={userData.email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            value={userData.pass}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={onChange}
          />
        </div>
       { errorMessage && <div>{errorMessage}</div>}
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
             value={userData.remember_me}
              type="checkbox"
              name="remember_me"
              className="custom-control-input"
              id="customCheck1"
              onChange={onChange}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p>
          You don`t have an account? <Link to="../sign-up">Register here!</Link>
        </p>
      </form>
    </div>
  );
};
export default LogInComponent