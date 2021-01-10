import React, { Suspense } from "react";
import styles from "./Header.module.css";
import { Redirect, Route, Switch } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.mainNav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a href="#about">Школа</a>
            {/* <NavLink to="/about">Школа</NavLink> */}
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
// <Suspense fallback={<div>Loading...</div>}>
//   <Switch>
//     {/* <Route exact path="/" component={AsincHomePage} /> */}
//     {/* <Route path="/movies/:movieId/" component={AsincMovieDetailsPage} /> */}
//     {/* <Route path="/movies/" component={AsincMoviesPage} /> */}
//     <Redirect to="/" />
//   </Switch>
// </Suspense>
export default Header;
