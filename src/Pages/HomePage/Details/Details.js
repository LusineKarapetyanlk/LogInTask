import { useParams} from "react-router-dom"
// import s from "./HomePage.module.css"

const DetailComponent= ()=>{
        const { id } = useParams()
    return(<>
         <h1> Details {id} </h1>
         <p>Text here</p>
         </>
    )
}

export default DetailComponent