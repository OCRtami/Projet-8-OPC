import "../styles/css/Logement.css";
import data from "../json/Fichier.json";
import Tag from "../components/tag/Tag";
import {useParams} from 'react-router-dom';
import Collapse from "../components/collapse/Collapse";
import pinkStar from "../assets/Pinkstar.png";
import  greyStar from "../assets/Greystar.png";

function Apartment(){

    const urlIdParams = useParams().id;
    const selectedApartment = data.filter((filtered) =>filtered.id === urlIdParams)
    const apartment = selectedApartment[0];
    function starRating(nbrOfStar){
        const maxRating=5;
        const rating=[];

        for(let i=0; i<maxRating; i++){

            if(nbrOfStar > i){
                rating.push(<img className="star" src={pinkStar} key={i}></img>)
            } 

            else if (nbrOfStar <= i){
                rating.push(<img className="star" src={greyStar} key={i}></img>)
            }
        }

        return rating;
    }

    return(
        
        <div className="logement">
            <div className="logement-wrap">
                <img src={apartment.pictures[0]} alt="Representation du lieu concerné" className="logement-img"></img>
                <div className="info">
                    <h2>{apartment.title}</h2>
                    <h3>{apartment.location}</h3>

                    <div className="tagsection">
                        {apartment.tags.map((element, index)=>(
                            <Tag tag={element} key={index}/>
                        ))}
                    </div>

                    <div className="Author">
                        <div className="Author-name">{apartment.host.name}</div>
                        <div className="Author-rating">
                            <div className="stars">{starRating(apartment.rating)}</div>
                        </div>
                    </div>

                    <div className="collapse-wrap">
                        <Collapse data={apartment.description} title={"Description"}/>
                        <Collapse data={apartment.equipments} title={"Equipement"}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Apartment