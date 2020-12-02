import React from "react";
import styles from "./info.module.css";

export const Info = ({ data }) => {
  return (
    <section id="about" className={styles.wrapper}>
      <img src="info.png" alt="Заходите к нас и сами всё увидете:)"></img>
     <div className={styles.container}>
      <h3 className={styles.title}>Коротка історія школи:</h3>
      <p className={styles.text}>{data.data_01}</p>
      
      <div >

        <input 
        type="checkbox" 
        id="readMore" 
        className={styles.readMore} />
        <label
        //  className={( styles.readMore)} 
        htmlFor="readMore">
          Читати далі
        </label>
        <div className={styles.textHidden}>
          <p>{data.data_02}</p>
          <img src={data.img} alt="img" />
        </div>
      </div>

     </div>
    </section>
  );
};

export default Info;