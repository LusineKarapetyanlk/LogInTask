import { useState } from "react";
import classes from "./AuthComponent.module.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import getLSData from "./GetLocalStorageData";
import { useDispatch } from "react-redux";

 const LogInComponent = () => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()
     

    const onSubmit=(e)=>{
        e.preventDefault()
        let dataExist=  getLSData(email,pass)
        
          if(!dataExist){
              alert("please registrate! Or enter valid ")
          }else{
              navigate("../")
              alert("Hello Dear NAME")
              
          }
           
    }

    const navigate = useNavigate()

    return (
        <div className={classes.wrapper}>
            <form className={classes.forms} onSubmit={(e)=>onSubmit(e)}>
              <button className={classes.closeBut} onClick={()=>navigate("../")}>X</button>
                    <h3>Log In</h3>
        
                    <div className={classes.input_label}>
                      <label>Email address</label>
                      <input
                        value={email}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
        
                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        value={pass}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e)=>setPass(e.target.value)}
                      />
                    </div>
        
                    <div className="mb-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          Remember me
                        </label>
                      </div>
                    </div>
        
                    <div className="d-grid">
                      <button type="submit" 
                              className="btn btn-primary"
                              onClick= {dispatch({ 
                                type: 'SET_LOGIN',
                                payload: true })}
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
      )
}
export default LogInComponent