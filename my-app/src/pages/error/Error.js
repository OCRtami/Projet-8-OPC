import { Link } from 'react-router-dom'
import "./css/Error.css"

function Error(){
    return(
        <div className="error">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">Oups! La page que vous demandez n'existe pas</h2>
            <Link className="return-link" to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error