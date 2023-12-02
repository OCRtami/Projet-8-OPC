import "../styles/css/Logement.css"
import logements from "../json/Fichier.json"
import Tag from "../components/tag/Tag";
import {useParams} from 'react-router-dom';

function Apartment(){
//Afin de pouvoir generer le contenu des fiches de logements, il a fallut que je cherche un moyen de stocker l'id...
//...,du logement pour lancer un filtrage et afficher le contenu desiré.
//UseParams nous permet de récuperer le parametre ":id" dans l'URL (/Logement/:id). qu'on a definit dans le router.
//C'est à dire que, lorsque un utilisateur clique sur un lien, l'url va se changer en {"/Logement/"+logement.id} ( voir card.js)
//UseParams, va comprendre grace au " : " que la section après "/Logement/" correspond à la valeur qu'il doit prendre.
//UseParams va donc prendre comme valeur, par exemple:"{id:'4e7f6a41c'}", il nous suffira juste de recuperer le contenu de la clé "id"
    const urlIdParams = useParams().id;
    const selectedApartment = logements.filter((filtered) =>filtered.id === urlIdParams)

    return(
        
        <div className="logement">
            <div className="logement-wrap">
                <img src={selectedApartment[0].pictures[0]} alt="Representation du lieu concerné" className="logement-img"></img>
                <div className="info">
                    <h2>{selectedApartment[0].title}</h2>
                    <h3>{selectedApartment[0].location}</h3>
                    <div className="tagsection">
                    {selectedApartment[0].tags.map((element)=>(
                        <Tag tag={element}/>
                    ))}
                </div>
                <div className="Author">
                        
                </div>
                </div>

            </div>
        </div>
    )
}

export default Apartment