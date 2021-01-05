import React from "react";

const TeachersMK = (item, styles) => {
  return (
    <li className={styles.listItem} key={item.id}>
      {item.img ? (
        <img width="370" height="370" src={item.img} alt={item.name} />
      ) : (
        ""
      )}
      {item.info ? <p className={styles.info}>{item.info}</p> : null}
      {item.name ? <p className={styles.name}>{item.name}</p> : null}
    </li>
  );
};

export default TeachersMK;
