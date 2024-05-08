import { FaHouseCircleCheck } from "react-icons/fa6";
import styles from "../Sidebar.module.css"

export const navItem = [
    {
        id: 1,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'What is Agile Project Metodology? ',
        link: "#home"
    },
    {
        id: 2,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'What is Scrum?',
        link: "#scrum"
    },
    {
        id: 3,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'Origin of Scrum',
        link: "#originScrum"
    },
    {
        id: 4,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'The 6 main principle',
        link: "#six-principle"
    },
    {
        id: 5,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'Theory behind the Scrum Team',
        link: "#theoryScrum"
    },
    {
        id: 6,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'Team roles',
        link: "#roles"
    },
    {
        id: 7,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'Scrum events',
        link: "#events"
    },
    {
        id: 8,
        icon: <FaHouseCircleCheck className={styles.navItem}/>,
        title: 'The role of the sprint event',
        link: "#sprintEvents"
    }
]