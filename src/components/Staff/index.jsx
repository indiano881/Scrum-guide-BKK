import styles from './Staff.module.css'

const Staff = ({name, title, email, phone}) => {
    return (
        <>
          <h4>{name}</h4>
          <p>{title}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </>
    )
};

export default Staff
