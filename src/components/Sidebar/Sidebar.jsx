import { IoIosArrowRoundForward } from "react-icons/io";
import { navItem } from "./assets/data";
import { useState } from "react";
import styles from "./Sidebar.module.css"

const Sidebar = () => {

  const [click, setClick] = useState(false);

  return (
    <div className={styles.sidebar}>
      <button onClick={() => setClick(!click)} className={styles.SidebarButton}>
        <IoIosArrowRoundForward/>
        </button>
        {click &&
          <div className={styles.sidebarContainer}>
            <ul className={styles.ContainerContentExtra}>
              {navItem.map((item) => (
                <a href={item.linkText}> 
                <li className={styles.navItemContainer} key={item.id}>
                    <span title={item.title}>{item.icon}</span>
                    {item.title}
                </li>
                </a>
              ))}
            </ul>
          </div>
        }
    </div>
  );
};

export default Sidebar;