import Card from "../components/Card"
import Banner from "../components/banner/Banner"
import "../styles/css/Homepage.css";

function Homepage(){
  return(
      <div className="main">
        <Banner/>
        <Card/>
      </div>  
  )
}   

export default Homepage