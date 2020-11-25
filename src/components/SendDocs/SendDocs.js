import React from "react";
import styles from "./SendDocs.module.css";

const SendDocs = (props) => {
  return (
    <section className={styles.sendDocs}>
      <h2 className={styles.title}>{props.title}</h2>
      <ul className={styles.list}>
        {props.data.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <img width="370" height="370" src={item.img} alt={item.name} />
            {item.name ? <p className={styles.name}>{item.name}</p> : ""}
            {item.info ? <p className={styles.info}>{item.info}</p> : ""}
            {item.info1 ? <p className={styles.info}>{item.info1}</p> : ""}

            {item.doc ? (
              <p className={styles.info}>
                <a href="https://github.com/Turerckiy"> {item.doc}</a>
              </p>
            ) : (
              ""
            )}
            {item.doc1 ? (
              <p className={styles.info}>
                <a href="https://github.com/Turerckiy"> {item.doc1}</a>
              </p>
            ) : (
              ""
            )}
            {item.doc2 ? (
              <p className={styles.info}>
                <a href="https://github.com/Turerckiy"> {item.doc2}</a>
              </p>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SendDocs;
