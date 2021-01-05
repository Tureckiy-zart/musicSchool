import React from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Teachers.module.css";
import TeachersGroup from "./TeachersGroup/TeachersGroup";

const Teachers = ({ piano, orchestra, folk }) => {
  return (
    <section className={styles.wrapper}>
      <TeachersGroup title="Фортепіанний відділ">
        <Carousel department={piano} />
      </TeachersGroup>
      <TeachersGroup title="Оркестровий відділ">
        <Carousel department={orchestra} />
      </TeachersGroup>
      <TeachersGroup title="Відділ народних інструментів">
        <Carousel department={folk} />
      </TeachersGroup>
    </section>
  );
};

export default Teachers;
