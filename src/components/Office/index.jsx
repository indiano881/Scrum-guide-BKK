import styles from './Office.module.css'
import {getImageURL} from "../../../utils/functions"

const Office = () => {

    return (
        
        <div>
          <img src={getImageURL("map.png")} alt="map" width={"200 px"}/>
          <h4>Our office is located in the hearth of Hammarby Sjöstad!</h4>
          <h4>Adress is Hammarby Fabriksväg 65, 120 30 Stockholm</h4>
          <h4>Phone: 123 456 789</h4>
          <h4>Open monday to friday 10.00/14.30</h4>
        </div>
    )
};

export default Office
