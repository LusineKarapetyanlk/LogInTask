import { Link, } from "react-router-dom"
import classes from "./Navbar.module.css"


const Navbar= ()=>{
    return(
     
        <nav className={classes.nav}>
          <ul>
            <li  className={classes.item}>
            <Link to="mypage">My Page</Link>
            </li>
            <li  className={classes.item}>
            <Link to="messages"> Messages</Link>
            </li>
            <li  className={classes.item}>
            <Link to="settings">Settings</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar