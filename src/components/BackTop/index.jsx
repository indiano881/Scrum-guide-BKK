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
      Back to Top{" "}
      <span className={styles.arrow}>
        <FaAngleDoubleRight />
        <FaAngleDoubleRight />
        <FaAngleDoubleRight />
        <FaAngleDoubleRight />
      </span>
    </span>
  );
};

export default index;
