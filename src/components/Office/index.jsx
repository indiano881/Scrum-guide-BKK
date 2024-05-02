import styles from './Office.module.css'
import {getImageURL} from "../../../utils/functions"

const Office = () => {

    return (
        <>
        <h2 className={styles.officeTitle}>Our Office</h2>
        <div className={styles.container}>
            
            <img className={styles.mapImage} src={getImageURL("map.png")} alt="map" width={"270 px"}/>
            <div className={styles.textContainer}>
                <h4 className={styles.text}>Our office is located in the hearth of Hammarby Sjöstad!</h4>
                <h4 className={styles.text}>Adress is Hammarby Fabriksväg 65, 120 30 Stockholm</h4>
                <h4 className={styles.text}>Phone: 123 456 789</h4>
                <h4 className={styles.text}>Open monday to friday 10.00/14.30</h4>
            </div>
        </div>
        </>
    )
};

export default Office
