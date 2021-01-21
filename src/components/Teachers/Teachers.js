import React from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Teachers.module.css";
import TeachersGroup from "./TeachersGroup/TeachersGroup";

const Teachers = ({ piano, orchestra, folk }) => {
  return (
    <section className={styles.wrapper}>
      <TeachersGroup title="Фортепіанний відділ">
        <h2 className={styles.title}>Фортепіанний відділ</h2>
        <Carousel department={piano} />
      </TeachersGroup>
      <TeachersGroup title="Оркестровий відділ">
        <h2 className={styles.title}>Оркестровий відділ</h2>
        <Carousel department={orchestra} />
      </TeachersGroup>
      <TeachersGroup title="Відділ народних інструментів">
        <h2 className={styles.title}>Відділ народних інструментів</h2>
        <Carousel department={folk} />
      </TeachersGroup>
    </section>
  );
};

export default Teachers;
