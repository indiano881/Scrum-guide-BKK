import styles from './ContactUs.module.css'
import Staff from "../Staff"
import staffArray from "../../data/staff"
const ContactUs = () => {
    return (
        <>
          <div className={styles.container}>

            <h3 className={styles.contactTitle}>Contact Us</h3>
                <div>
                    Our Team of expert
                    <div className={styles.gridContainer}>
                        {staffArray.map((person, index)=> <Staff {...person} key={index}/>)}
                    </div>
                
                </div>
            
          </div>
        </>
    )
};

export default ContactUs
