import Card from "../components/Card"
import Banner from "../components/banner/Banner"
import "../styles/css/Homepage.css";
import logements from "../json/Fichier.json";

function Homepage(){
  return(
      <div className="main">
        <Banner/>
        <Card logements={logements}/>
      </div>  
  )
}   

export default Homepage