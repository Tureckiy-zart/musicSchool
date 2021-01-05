import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Navigation = () => (
  <div className={styles.wrapper}>
    <nav className={styles.mainNav}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <a href="#about">Школа</a>
        </li>
        <li className={styles.list_item}>
          <a href="#studyWays">Напрямки навчання</a>
        </li>
        <li className={styles.list_item}>
          <a href="#groupMusic">Заходи</a>
        </li>
        <li className={styles.list_item}>
          <a href="#sendDocs">Документи</a>
        </li>
        <li className={styles.list_item}>
          <a href="#contacts">Контакти</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
