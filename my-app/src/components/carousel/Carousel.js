import "./css/Carousel.css"
import { useState } from 'react'
import rightArrow from "../../assets/rightArrow.png"
import leftArrow from "../../assets/leftArrow.png"

function Carousel({pictures}){
    
    const picturesArray=[];
    const [actualSrc,nextSrc] = useState(0)

    // Remplit la const picturesArray des photos provenant du props "pictures" ( car ceux ci sont considerer comme un objet )
    pictures.map((e)=>{
        picturesArray.push(e);
    })

    function nextArrow(){
        nextSrc(actualSrc-1)

        if (actualSrc <= 0) {
        nextSrc(picturesArray.length - 1)
        }
    }

    function previousArrow(){
        nextSrc(actualSrc+1)

        if (actualSrc == picturesArray.length -1) {
            nextSrc(0)
        }
    }

    return(
        <div className="carousel">
            <img src={picturesArray[actualSrc]} alt="Representation du lieu concerné" className="carrousel-img"/>
            <div className="arrows">
                <img onClick={previousArrow} className="left-arrow"  src={rightArrow}/>
                <img onClick={nextArrow} className="right-arrow" src={leftArrow}/>
            </div>

        </div>
    )
}

export default Carousel