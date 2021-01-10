import React from "react";
import styles from "./info.module.css";

export const Info = ({ data, children }) => {
  console.log('data', data)
  console.log('44444444', 44444444)
  return (
    <section id="about" className={styles.wrapper}>
        <img
          className={styles.img}
          src="/img/info/info.png"
          alt="Заходите к нам и сами всё увидете:)"
        ></img>
        <h3 className={styles.title}>Коротка історія школи:</h3>
        <p className={styles.text}>{data[0].date_01}</p>

        <div className={styles.readMoreWraper}>
          <input type="checkbox" id="readMore" className={styles.readMore} />
          <label htmlFor="readMore">Читати далі</label>
          <div className={styles.textHidden}>
            <p>{data[0].date_02}</p>
            <img src={data[0].img} alt="img" />
          </div>
        </div>
        {children}
    </section>
  );
};

export default Info;
