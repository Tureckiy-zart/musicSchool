import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <section className={styles.footer}>
      <img src={props.data} alt="footer" />
      <span className={styles.author}>
        Made with love by <a href="https://github.com/Turerckiy">zart</a> — fork or suggest edits on <a href="https://github.com/Turerckiy">GitHub</a>
      </span>
    </section>
  );
};

export default Footer;
