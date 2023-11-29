import Card from "./Card"
import "../styles/css/Homepage.css";

function Homepage(){
  return(
      <div className="main">

          <div className="title-card">
              <p className="text">Chez vous, <span>partout et ailleurs</span></p>
          </div>
            <Card/>
      </div>  
  )
}   

export default Homepage