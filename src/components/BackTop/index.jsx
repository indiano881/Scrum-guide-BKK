import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "./BackTop.module.css";

const index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <span onClick={scrollToTop} className={styles.backTop}>
      <span>
        Back<span className={styles.toTop}>to Top</span>{" "}
      </span>
      <span onClick={scrollToTop} className={styles.arrow}>
        <FaAngleDoubleRight />
        <FaAngleDoubleRight />
        <FaAngleDoubleRight />
        <span className={styles.mobileNone}>
          <FaAngleDoubleRight />
        </span>
      </span>
    </span>
  );
};

export default index;
