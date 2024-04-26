import { FaInstagram, FaFacebook, FaGithub, FaTrademark } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <IconContext.Provider value={{color: "#FFF", size: "1.5em", padding:"16px"}}>
        <footer className={styles.footer}> 
        <div className={styles.copyright}>2024 BKK <FaTrademark fontSize="1em"/></div>
            <ul>
                    <i> <a href="https://instagram.com"> <FaInstagram /> </a> </i>
                    <i> <a href="https://facebook.com"> <FaFacebook /> </a> </i>
                    <i> <a href="https://github.com/indiano881/Scrum-guide-BKK"> <FaGithub /> </a> </i>
           </ul>
        </footer>
        </IconContext.Provider>
    )
}

export default Footer