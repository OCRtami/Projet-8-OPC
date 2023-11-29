import "../styles/css/Card.css"
import logements from "../json/Fichier.json";
import { Link } from 'react-router-dom'

function Card(){
    return(
        <div className="card-grid">
            {logements.map((logement) => (

                <div className="card" key={logement.id}>
                    <div className="card-wrap">
                        <Link>
                        <img src={logement.cover}></img>
                        <h2>{logement.title}</h2>
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Card