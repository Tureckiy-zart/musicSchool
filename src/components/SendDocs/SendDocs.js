import React from "react";
import styles from "./SendDocs.module.css";

const SendDocs = ({ data, title }) => {
  console.log("data", data);
  return (
    <section id="sendDocs" className={styles.sendDocs}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {data.map((item) => {
          const { id, img, name, date_01, date_02 } = item;
          return (
            <li className={styles.listItem} key={id}>
              <img width="370" height="370" src={img} alt={name} />
              {name ? <p className={styles.name}>{name}</p> : ""}
              {date_01 ? <p className={styles.info}>{date_01}</p> : ""}
              {date_02 ? <p className={styles.info}>{date_02}</p> : ""}

              {/* {doc ? (
                <p className={styles.info}>
                  <a href="https://github.com/Turerckiy"> {doc}</a>
                </p>
              ) : (
                ""
              )}
              {doc1 ? (
                <p className={styles.info}>
                  <a href="https://github.com/Turerckiy"> {doc1}</a>
                </p>
              ) : (
                ""
              )}
              {doc2 ? (
                <p className={styles.info}>
                  <a href="https://github.com/Turerckiy"> {doc2}</a>
                </p>
              ) : (
                ""
              )} */}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SendDocs;
