import "./css/Carousel.css"
import { useState } from 'react'
import rightArrow from "../../assets/rightArrow.png"
import leftArrow from "../../assets/leftArrow.png"

function Carousel({pictures}){
    
    const picturesArray=[];
    const [actualSrc,SetActualSrc] = useState(0)

    // Remplit la const picturesArray des photos provenant du props "pictures" ( car ceux ci sont considerer comme un objet )
    pictures.map((e)=>{
        return(picturesArray.push(e));
    })

    function nextArrow(){
        SetActualSrc(actualSrc-1)

        if (actualSrc <= 0) {
            SetActualSrc(picturesArray.length - 1)
        }
    }

    function previousArrow(){
        SetActualSrc(actualSrc+1)

        if (actualSrc === picturesArray.length -1) {
            SetActualSrc(0)
        }
    }

    return(
        <div className="carousel">
            <div className="carousel-ImgFrame">
                <img src={picturesArray[actualSrc]} alt="Representation du lieu concerné" className="carrousel-img"/>
            </div>
            <div className="arrows">
                <img onClick={previousArrow} alt="fleche précedent de la gallerie" className="left-arrow"  src={rightArrow}/>
                <img onClick={nextArrow} alt="fleche suivant de la gallerie"  className="right-arrow" src={leftArrow}/>
            </div>
            <p className="counter">{actualSrc+1}/{pictures.length}</p>
        </div>
    )
}

export default Carousel