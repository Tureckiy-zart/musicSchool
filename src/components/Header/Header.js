import React, { Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.css";
import { Redirect, Route, Switch } from "react-router-dom";

export const Header = (props) => {
  return (
    <>
      <header className={styles.wrapper}>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* <Route exact path="/" component={AsincHomePage} /> */}
          {/* <Route path="/movies/:movieId/" component={AsincMovieDetailsPage} /> */}
          {/* <Route path="/movies/" component={AsincMoviesPage} /> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default Header;
