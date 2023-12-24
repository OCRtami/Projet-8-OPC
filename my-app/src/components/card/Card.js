import "./css/Card.css"
import { Link } from 'react-router-dom'

function Card({logements}){

    return(
        <div className="card-grid">
            {logements.map((logement) => (

                <div className="card" key={logement.id}>
                        <Link to={"/Logement/"+logement.id}>
                        <img src={logement.cover} alt=""></img>
                        <h2>{logement.title}</h2>
                        </Link>
                </div>

            ))}
        </div>
    )
}

export default Card