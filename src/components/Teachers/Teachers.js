// import React, { Component } from "react";
import React from "react";
import Carousel from "../Carousel/Carousel";
// import Carousel from "../Carousel/Carousel";
import styles from "./Teachers.module.css";
import TeachersGroup from "./TeachersGroup/TeachersGroup";

const Teachers = ({ piano, orcestra, nature }) => {
  // console.log("data Teachers", data);
  // const { piano } = data;
  // console.log("piano", piano);
  return (
    <section className={styles.wrapper}>
      <TeachersGroup title="Фортепіанний відділ">
        <Carousel department={piano} />
      </TeachersGroup>
      <TeachersGroup title="Оркестровий відділ">
        <Carousel department={orcestra} />
      </TeachersGroup>
      <TeachersGroup title="Відділ народних інструментів">
        <Carousel department={nature} />
      </TeachersGroup>
    </section>
  );
};

export default Teachers;
