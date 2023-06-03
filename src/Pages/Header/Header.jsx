import { Link } from "react-router-dom"
import s from "./Header.module.css" 

const Header= ()=>{
   
    return(
     <header className={s.header}>
      
        <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" alt="icon"  />
        <div className={s.headerNav}>
            <Link to="/">Home Page</Link>

            <Link to={"/sign-in"}>Sign In</Link>
            <Link to={"/sign-up"}>Sign Up</Link>
        </div>
     </header>
       
    )
}

export default Header