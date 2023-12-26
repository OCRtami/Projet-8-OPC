import "./css/Apartment.css";
import data from "../../json/Fichier.json";
import Tag from "../../components/tag/Tag";
import {useParams} from 'react-router-dom';
import Collapse from "../../components/collapse/Collapse";
import pinkStar from "../../assets/Pinkstar.png";
import greyStar from "../../assets/Greystar.png";
import Carousel from "../../components/carousel/Carousel"
import Error from "../error/Error";


function Apartment(){

    //UseParams nous permet de récuperer le parametre ":id" dans l'URL (/Logement/:id). qu'on a definit dans le router.
    //UseParams va donc prendre comme valeur, par exemple:"{id:'4e7f6a41c'}", il nous suffira juste de recuperer le contenu de la clé "id"
    const urlIdParams = useParams().id;

    //selectedApartment va filtrer tout le contenu du fichier json et prendre la valeur de l'objet qui aura pour ID la valeur stocker dans urlidParams
    const selectedApartment = data.filter((filtered) =>filtered.id === urlIdParams)

    //apartment devient la variable qui contient l'objet filtré.
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

    if(apartment == null || apartment == undefined || urlIdParams !== apartment.id){
        return <Error/>
    }

        return(
            
            <div className="logement">
                <div className="logement-wrap">
                    <Carousel pictures={apartment.pictures}/>
                    
                    <div className="logement-description">
                        <div className="info-wrap">
                            <div>
                                <h2>{apartment.title}</h2>
                                <h3>{apartment.location}</h3>
                            </div>

                            <div className="tagsection">
                                {apartment.tags.map((element, index)=>(
                                    <Tag tag={element} key={index}/>
                                ))}
                            </div>
                        </div>
                        
                        <div className="author">

                            <div className="author-info">
                                <div className="author-name">{apartment.host.name}</div>
                                <img className="author-img" alt="Photo du propriétaire" src={apartment.host.picture}></img>
                            </div>

                            <div className="author-rating">
                                <div className="stars">{starRating(apartment.rating)}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="collapse-wrap">
                        <Collapse data={apartment.description} title={"Description"}/>
                        <Collapse data={apartment.equipments} title={"Equipement"}/>
                    </div>
                </div>
            </div>
        )
}

export default Apartment