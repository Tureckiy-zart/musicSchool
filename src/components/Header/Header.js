import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
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
    </header>
  );
};
export default Header;
