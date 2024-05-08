import styles from "./Form.module.css";
import { getImageURL } from "../../utils/functions";

const Form = () => {
  return (
    <>
      <span id="contact" className={styles.contactUsLinkTag}></span>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.container}>
        <form
          className={styles.formContainer}
          action="mailto: scrum-bkk@gmail.com"
          method="POST"
          enctype="text/plain"
        >
          <label className={styles.label} for="name" minlength="3" required>
            Name:
          </label>
          <input className={styles.input} id="name" type="text" placeholder="Insert your name..." />
          <label className={styles.label} for="name" minlength="6">
            Phone:
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Insert your phone..."
          />
          <label for="message"></label>
          <textarea
            className={styles.input}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Please write your message here..."
            required
          ></textarea>
          <button className={styles.button}>Send message</button>
        </form>
        <img
          className={styles.imageContact}
          src={getImageURL("Contact-us.png")}
          alt="contact us image"
          width={"500px"}
          height={"auto"}
        />
      </div>
    </>
  );
};

export default Form;
