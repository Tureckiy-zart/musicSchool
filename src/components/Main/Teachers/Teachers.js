// import React, { Component } from "react";
import React from "react";
import styles from "./Teachers.module.css";

// export class Teachers extends Component {
//   render() {
//     console.log("this.props", this.props);
//     const { piano } = this.props;
//     console.log("title", piano);
//     return (
//       <section className={styles.wrapper}>
//         <h2 className={styles.title}>Фортепіанний відділ</h2>
//         <ul className={styles.list}>
//           <li className={styles.list_item}>
//             <img
//               width="370"
//               height="370"
//               src="./img/1-1.png"
//               alt="Самойлова Юлія Олегівна"
//             ></img>
//             <p className={styles.info}>
//               Завідувачка фортепіанного відділу, викладач класу фортепіано,
//               концертмейстер
//             </p>
//             <p className={styles.name}>Самойлова Юлія Олегівна</p>
//           </li>
//           <li className={styles.list_item}>
//             <img
//               width="370"
//               height="370"
//               src="./img/1-1.png"
//               alt="Самойлова Юлія Олегівна"
//             ></img>
//             <p className={styles.info}>
//               Заступник директора з навчально-виховної роботи, викладач класу
//               фортепіано, концертмейстер
//             </p>
//             <p className={styles.name}>Колодяжна Марина Володимирівна</p>
//           </li>
//           <li className={styles.list_item}>
//             <img
//               width="370"
//               height="370"
//               src="./img/1-1.png"
//               alt="Самойлова Юлія Олегівна"
//             ></img>
//             <p className={styles.info}>
//               Викладач класу фортепіано, концертмейстер
//             </p>
//             <p className={styles.name}>Призенко Олена Вячеславівна</p>
//           </li>
//         </ul>
//       </section>
//     );
//   }
// }

// export default Teachers;

const Teachers = (props) => {
  const department = Object.values(props);
  console.log("department", department);
  //   const d = Object.values(props).map((element) => {
  //     const department = Object.keys(element);
  //     const teachers = Object.values(element);

  //     let f = { [department]: teachers };
  // console.log('f', f)
  //     console.log("r", teachers);
  //   });
  //   console.log("d", d);



  
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Фортепіанний відділ</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img
            width="370"
            height="370"
            src="./img/1-1.png"
            alt="Самойлова Юлія Олегівна"
          ></img>
          <p className={styles.info}>
            Завідувачка фортепіанного відділу, викладач класу фортепіано,
            концертмейстер
          </p>
          <p className={styles.name}>Самойлова Юлія Олегівна</p>
        </li>
        <li className={styles.list_item}>
          <img
            width="370"
            height="370"
            src="./img/1-1.png"
            alt="Самойлова Юлія Олегівна"
          ></img>
          <p className={styles.info}>
            Заступник директора з навчально-виховної роботи, викладач класу
            фортепіано, концертмейстер
          </p>
          <p className={styles.name}>Колодяжна Марина Володимирівна</p>
        </li>
        <li className={styles.list_item}>
          <img
            width="370"
            height="370"
            src="./img/1-1.png"
            alt="Самойлова Юлія Олегівна"
          ></img>
          <p className={styles.info}>
            Викладач класу фортепіано, концертмейстер
          </p>
          <p className={styles.name}>Призенко Олена Вячеславівна</p>
        </li>
      </ul>
    </section>
  );
};

export default Teachers;
