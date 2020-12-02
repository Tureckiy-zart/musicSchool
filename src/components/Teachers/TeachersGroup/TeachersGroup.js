import React from "react";
import Carousel from "../../Carousel/Carousel";
import styles from "./TeachersGroup.module.css";

const TeachersGroup = ({department, title}) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
     <Carousel data= {department} />
   </section>
  );
};

export default TeachersGroup;
