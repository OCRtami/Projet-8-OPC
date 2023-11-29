import "../styles/css/Logement.css"
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import LogementImg from "../assets/ImageTest.png"

function Logement(){
    return(
        <div className="banner">
            <div className="banner-wrap">
            <img src={LogementImg} alt="Logement" className="banner-img"/>
                       {/* <div className="arrow">
          <img src={leftArrow} alt="Fleche de Gauche" className="arrow-left"/>
          <img src={rightArrow} alt="Fleche de Droite" className="arrow-right"/>
        </div> */}

            </div>


      </div>
    )
}

export default Logement