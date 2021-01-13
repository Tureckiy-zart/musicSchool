import React from "react";
import { Link } from "react-router-dom";
import styles from "./SendDocs.module.css";
// import doc1 from 'public/download/doc1.txt'
const SendDocs = ({ data, title }) => {
  return (
    <section id="sendDocs" className={styles.sendDocs}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {data.map((item) => {
          const { id, img, name, date_01, date_02 } = item;
          const doc = " https://forms.gle/vNE9kJ4fWjrJ6pfq7";
          return (
            <li className={styles.listItem} key={id}>
              <img width="370" height="370" src={img} alt={name} />
              {name ? <p className={styles.name}>{name}</p> : ""}
              {date_01 ? (
                <p className={styles.info}>{date_01}</p>
              ) : (
                <p className={styles.info}>
                  <a target="_blank" href={doc}>
                    Заполнить анкету
                  </a>
                </p>
              )}
              {date_02 ? <p className={styles.info}>{date_02}</p> : ""}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SendDocs;
