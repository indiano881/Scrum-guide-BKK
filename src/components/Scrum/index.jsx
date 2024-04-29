<<<<<<< HEAD
import styles from "./Scrum.module.css"

import { getImageURL } from "../../utils/functions";


const Scrum = ({ title, content1, content2, content3, content4, content5, content6, linkText, image }) => {
  return (
    <div id={linkText} className={styles.container}>
      <h3>{title}</h3>
      <img className={styles.imagePar} src={getImageURL(image)} alt={title} width={"270px"}/>
      <div className={styles.textContainer}>
        <p>{content1}</p>
        <p>{content2}</p>
        <p>{content3}</p>
        {/*CODE BELOW IS LIKE THIS BECAUSE NOT ALL THE PARAPARPG HAVE 6 lines of content. Some have just 5 for example//DAVIDE */}
        {content4!=null && <p>{content4}</p>}
        {content5!=null && <p>{content5}</p>}
        {content6!=null && <p>{content6}</p>}

      </div>
      
    </div>
  );
};

=======
const Scrum = ({ title, content1, content2, content3, linkText }) => {
  return (
    <div id={linkText}>
      <h3>{title}</h3>
      <p>{content1}</p>
      <p>{content2}</p>
      <p>{content3}</p>
    </div>
  );
};

>>>>>>> eb8bf0f (added id to link in header)
export default Scrum;
