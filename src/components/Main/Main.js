import React, { Component } from "react";
import Info from "./Info/Info";
import Teachers from "./Teachers/Teachers";
import styles from "./Main.module.css";

// import PropTypes from 'prop-types'

export default class Main extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  // state = {
  //   piano: {
  //     title: "Фортепіанний відділ",
  //   },
  // };
  state = {
    departments: {
      "Фортепіанний відділ": [
        {
          img: "./Teachers/img/1-1.png",
          info:
            "Завідувачка фортепіанного відділу, викладач класу фортепіано, концертмейстер",
          name: "Самойлова Юлія Олегівна",
        },
        {
          img: "./Teachers/img/1-2.png",
          info:
            "Заступник директора з навчально-виховної роботи, викладач класу фортепіано, концертмейстер",
          name: "Колодяжна Марина Володимирівна",
        },
        {
          img: "./Teachers/img/1-3.png",
          info: "Викладач класу фортепіано, концертмейстер",
          name: "Призенко Олена Вячеславівна",
        },
        {
          img: "./Teachers/img/2-1.png",
          info: "Викладач класу фортепіано, сольного співу, концертмейстер",
          name: "Книшенко Наталія Петрівна",
        },
        {
          img: "./Teachers/img/2-2.png",
          info: "Викладач теоретичних дисциплін",
          name: "Урсакій Тетяна Миколаївна",
        },
        {
          img: "./Teachers/img/2-3.png",
          info: "Викладач класу фортепіано, концертмейстер",
          name: "Рубан Тетяна Миколаївна",
        },
        {
          img: "./Teachers/img/3-1.png",
          info: "Викладач класу фортепіано, концертмейстер",
          name: "Самодай Тетяна Миколаївна",
        },
        {
          img: "./Teachers/img/3-2.png",
          info: "Концертмейстер, викладач класу фортепіано",
          name: "Кварта Ольга Юріївна",
        },
        {
          img: "./Teachers/img/3-3.png",
          info: "Викладач класу сольного співу",
          name: "Кравченко Ірина Борисівна",
        },
      ],

      "Оркестровий відділ": [],
      "Відділ народних інструментів": [],
    },
  };

  render() {
    return (
      <main className={styles.wrapper}>
        <Info />
        <Teachers props={this.state.departments} />
      </main>
    );
  }
}
