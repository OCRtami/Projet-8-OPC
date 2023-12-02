import "../styles/css/Footer.css";
import logo from "../assets/KasaLogo.png"

function Footer() {
    return(
        <div className="footer">
            <img src={logo}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer