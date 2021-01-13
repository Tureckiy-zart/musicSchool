import React from "react";
import styles from "./BackToTopBtn.module.css";
const BackToTopBtn = () => {
  return (
    <a href="#" title="Вернуться к началу" class="topbutton">
      <button className={styles.topbutton} />
    </a>
  );
};

export default BackToTopBtn;
