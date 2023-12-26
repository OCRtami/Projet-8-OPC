import Card from "../../components/card/Card"
import Banner from "../../components/banner/Banner"
import "./css/Homepage.css";
import data from "../../json/Fichier.json";

function Homepage(){
  return(
      <div className="main">
        <Banner/>
        <Card logements={data}/>
      </div>  
  )
}   

export default Homepage