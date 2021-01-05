import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  console.log("props", props);
  return (
    <section id="contacts" className={styles.footer}>
      <img src="/img/footer/footer.png" alt="map" />
      <span className={styles.author}>
        Made with love by <a href="https://zart-art.online">zart</a> — fork or
        suggest edits on <a href="https://github.com/Turerckiy">GitHub</a>
      </span>
    </section>
  );
};

export default Footer;
