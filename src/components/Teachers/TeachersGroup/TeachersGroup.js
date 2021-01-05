import React from "react";
// import Carousel from "../../Carousel/Carousel";
import styles from "./TeachersGroup.module.css";

const TeachersGroup = ({ title, children }) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
        {children}
    </section>
  );
};

export default TeachersGroup;
//
