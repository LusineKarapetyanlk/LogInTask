import { Link, useNavigate } from "react-router-dom"
import classes from "./AuthComponent.module.css"
import { useState } from "react";
import setLSData from "./SetLocalStorageData";

const RegisterComponent = () => {
  const [newEmail,setNewEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  

  const navigate = useNavigate()

const formSubmit = (e)=>{
  e.preventDefault()
  setLSData(newEmail,newPass)
  navigate("../")
}

    return (
       <div className={classes.wrapper}>
         <form className={classes.forms} 
                onSubmit={formSubmit}>
         <button className={classes.closeBut} onClick={()=>navigate("../")}>X</button>
        
          <h3>Register</h3>
  
          <div className={classes.input_label}>
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
  
          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
  
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              value={newEmail}
              className="form-control"
              placeholder="Enter email"
              onChange={(e)=>setNewEmail(e.target.value)}
            />
          </div>
  
          <div className="mb-3">
            <label>Password</label>
            <input
            value={newPass}
              type="password"
              className="form-control"
              placeholder="******"
              onChange={(e)=>setNewPass(e.target.value)}
            />
          </div>
  
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="../sign-in">sign in?</Link>
          </p>
        </form>
       </div>
      )
}

export default RegisterComponent