import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Navigation = () => (
  <div className={styles.wrapper}> 
    <nav className={styles.mainNav}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <NavLink
            exact
            to="/about"
            // style={{ padding: "20px", width: "100%" }}
            // activeStyle={activeStyle}
          >
            Школа
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink
            // to="/movies"
            to="/"
            // style={{ padding: "20px", width: "100%" }}
            // activeStyle={activeStyle}
          >
            Напрямки навчання
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink
            exact
            to="/"
            // style={{ padding: "20px", width: "100%" }}
            // activeStyle={activeStyle}
          >
            Заходи
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink
            // to="/movies"
            to="/"
            // style={{ padding: "20px", width: "100%" }}
            // activeStyle={activeStyle}
          >
            Документи
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink
            // to="/movies"
            to="/"
            // style={{ padding: "20px", width: "100%" }}
            // activeStyle={activeStyle}
          >
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
