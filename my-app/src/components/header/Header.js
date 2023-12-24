import "./css/Header.css";
import logo from "../../assets/KasaLogo.png"
import { Link, NavLink } from 'react-router-dom'


function Header() {
    
    return(
        <div className="header">
            <div className="header-wrap">
                <img src={logo} alt='KASA' className='logo' />
                <nav className="header-nav">
                    <div>                    
                        <NavLink to="/">Accueil</NavLink>
                    </div>
                    <div> 
                        <NavLink to="/about">A propos</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header