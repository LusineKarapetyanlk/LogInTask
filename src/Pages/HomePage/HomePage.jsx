import s from "./HomePage.module.css";
import { Link } from "react-router-dom"

const HomePage= ()=>{
    return(
        <div >HomePage
        <Link to="details/1" >
              <div className= {s.wrapper }>
              
              <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EKyDNj0vZP4A4PtPxW2ON4ihrU8IGGU4hWfZ-1Ff1f7wXMU1tdCIphZUgS71STByHJM&usqp=CAU" alt="icon"  />
                      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
              </div>
      </Link>
      <Link to="details/2" >
              <div className= {s.wrapper }>
              
              <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EKyDNj0vZP4A4PtPxW2ON4ihrU8IGGU4hWfZ-1Ff1f7wXMU1tdCIphZUgS71STByHJM&usqp=CAU" alt="icon"  />
                      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
              </div>
      </Link>
      <Link to="details/3" >
              <div className= {s.wrapper }>
              
              <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EKyDNj0vZP4A4PtPxW2ON4ihrU8IGGU4hWfZ-1Ff1f7wXMU1tdCIphZUgS71STByHJM&usqp=CAU" alt="icon"  />
                      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
              </div>
      </Link>
    </div>
    )
}

export default HomePage