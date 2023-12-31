import {useState} from "react";
import "./css/Collapse.css"
import collapseArrow from "../../assets/collapseArrow.png"

function Collapse({data,title}){

    const [isOpen, setIsOpen] = useState(true)
    

    return(
        <div className="collapse">

            <div className="collapse-btn" onClick={() => setIsOpen(!isOpen)}>
                <div className="collapse-title">{title}</div>
                <img alt="collapse's arrow" src={collapseArrow} className={isOpen ? "collapse-arrow" : "collapse-arrow-down"}/>
            </div>

            <div className={isOpen ? "collapse-info-hidden" : "collapse-info" }>
                {Array.isArray(data) ? data.map((data,index)=>{
                    return (<div key={index}>{data}</div>)}): data }
            </div>

        </div>
    )
    
}

export default Collapse;