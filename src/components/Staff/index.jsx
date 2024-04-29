import styles from './Staff.module.css'

const Staff = ({name, title, email, phone}) => {
    return (
        <div className={styles.card}>
          <h4>{name}</h4>
          <p>{title}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
    )
};

export default Staff
