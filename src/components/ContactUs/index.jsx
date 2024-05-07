import styles from "./ContactUs.module.css";
import Staff from "../Staff";
import staffArray from "../../data/staff";
const ContactUs = () => {
  return (
    <>
      <span id="about-us" className={styles.aboutUsLinkTag}></span>
      <div className={styles.container}>
        <h3 className={styles.contactTitle}>About Us</h3>
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
