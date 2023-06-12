import { Link, useNavigate } from "react-router-dom";
import classes from "../AuthComponent.module.css";
import { useState } from "react";

import { registaration } from "../../store/logIn";
import { useDispatch } from "react-redux";
const RegisterComponent = () => {
  
  const [spanClassName, setSpanClassName] = useState("initialClass");
  const [userData, setUserData]= useState({
    firstName : '',
    lastName : '',
    email: '',
    password : '',
    confirm_password :'',
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const comparePassword = (e) => {
 
    const { value } = e.target;

  //   // Compare the input values
    if (!value) {
      console.log( "Please enter Confirm Password.");
    } else if (userData.password === userData.confirm_password) {
      setSpanClassName("newClass");
      console.log("The input values are the same")
    } else {
      setSpanClassName("initialClass");
      console.log("The input values are different");
    }
    
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const result = dispatch(
      registaration(userData.email, userData.password, userData.firstName, userData.lastName)
    );
    console.log(result);
    if (result) {
      navigate("/sign-in");
    }
  };
  const nav =()=>navigate("../")
  const onChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})

  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.forms} onSubmit={formSubmit}>
        <button className={classes.closeBut} onClick={nav}>
          X
        </button>

        <h3>Register</h3>

        <div className={classes.input_label}>
          <label>First name</label>
          <input
            value={userData.firstName}
            name="firstName"
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            value={userData.lastName}
            name="lastName"
            className="form-control"
            placeholder="Last name"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={userData.email}
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            value={userData.password}
            type="password"
            name="password"
            className="form-control"
            placeholder="******"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            value={userData.confirm_password}
            type="password"
            name="confirm-password"
            className={spanClassName}
            placeholder="******"
            onChange={onChange}
            onBlur={comparePassword} ///????
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
  );
};

// const RegisterComponent = () => {
//   const [newEmail, setNewEmail] = useState("");
//   const [newPass, setNewPass] = useState("");
//   const [Pass2, setPass2] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [spanClassName, setSpanClassName] = useState("initialClass");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const comparePassword = (e) => {
//     const { name, value } = e.target;
//     // Update the  input value
//     if (name === "password") {
//       setNewPass(value);
//     } else if (name === "confirm-password") {
//       setPass2(value);
//     }
//     // Compare the input values
//     if (newPass === Pass2) {
//       setSpanClassName("newClass");
//       console.log("The input values are the same");
//     } else {
//       setSpanClassName("initialClass");
//       console.log("The input values are different");
//     }
//   };
//   const formSubmit = (e) => {
//     e.preventDefault();
//     const result = dispatch(
//       registaration(newEmail, newPass, firstName, lastName)
//     );
//     console.log(result);
//     if (result) {
//       navigate("/sign-in");
//     }
//   };
//   const nav =()=>navigate("../")
//   const onChange = () => {
//     setFirstName(e.target.value)
//   };

//   return (
//     <div className={classes.wrapper}>
//       <form className={classes.forms} onSubmit={formSubmit}>
//         <button className={classes.closeBut} onClick={nav}>
//           X
//         </button>

//         <h3>Register</h3>

//         <div className={classes.input_label}>
//           <label>First name</label>
//           <input
//             value={firstName}
//             type="text"
//             className="form-control"
//             placeholder="First name"
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Last name</label>
//           <input
//             type="text"
//             value={lastName}
//             className="form-control"
//             placeholder="Last name"
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             value={newEmail}
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => setNewEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             value={newPass}
//             type="password"
//             name="password"
//             className="form-control"
//             placeholder="******"
//             onChange={(e) => setNewPass(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label>Confirm Password</label>
//           <input
//             value={Pass2}
//             type="password"
//             name="confirm-password"
//             className={spanClassName}
//             placeholder="******"
//             onChange={(e) => {
//               comparePassword(e);
//             }}
//           />
//           <span className={classes.initialClass}>*</span>
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <Link to="../sign-in">sign in?</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

export default RegisterComponent;
