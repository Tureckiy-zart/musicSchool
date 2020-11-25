// import React, { Component } from "react";
import { render } from "@testing-library/react";
import React from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Teachers.module.css";

const Teachers = (props) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{props.title}</h2>
      <Carousel {...props} />
    </section>
  );
};

export default Teachers;
