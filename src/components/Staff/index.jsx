import styles from './Staff.module.css'
import { getImageURL } from '../../utils/functions';
const Staff = ({name, image, title, email, phone}) => {
    return (
        <div className={styles.card}>
          <img className={styles.imageStaff} src={getImageURL(image)} alt={name} width="80 px" height="auto"/>
          <h4>{name}</h4>
          <p>{title}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
    )
};

export default Staff
