import logo from "../assets/KasaLogo.png"
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div className="header">
            <img src={logo} alt='KASA' className='logo' />
            <nav className="header-nav">
                 <Link to="/">Accueil</Link>
                 <Link to="/TestB">A propos</Link>
            </nav>
        </div>
    )
}

export default Header