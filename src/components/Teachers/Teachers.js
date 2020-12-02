// import React, { Component } from "react";
import React from "react";
// import Carousel from "../Carousel/Carousel";
import styles from "./Teachers.module.css";
import TeachersGroup from "./TeachersGroup/TeachersGroup";

const Teachers = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      <TeachersGroup
        department={data["Фортепіанний відділ"]}
        title={"Фортепіанний відділ"}
      />
      <TeachersGroup
        department={data["Оркестровий відділ"]}
        title={"Оркестровий відділ"}
      />
      <TeachersGroup
        department={data["Відділ народних інструментів"]}
        title={"Відділ народних інструментів"}
      />
    </section>
  );
};

export default Teachers;
