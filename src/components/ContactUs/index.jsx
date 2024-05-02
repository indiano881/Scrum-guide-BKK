import styles from "./ContactUs.module.css";
import Staff from "../Staff";
import staffArray from "../../data/staff";
const ContactUs = () => {
  return (
    <>
      <div id="contact" className={styles.container}>
        <div>
          <h3 className={styles.contactTitle}>Our Team of Expert</h3>
          <div className={styles.gridContainer}>
            {staffArray.map((person, index) => (
              <Staff {...person} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
