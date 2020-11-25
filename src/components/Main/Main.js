import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Info from "../Info/Info";
import { GroupMusic } from "../GroupMusic/GroupMusic";
import Teachers from "../Teachers/Teachers";

import piano1 from "../../img/teachers/1-1.png";
import piano2 from "../../img/teachers/1-2.png";
import piano3 from "../../img/teachers/1-3.png";
import group01_01 from "../../img/groupMusic/group01-01.png";
import group01_02 from "../../img/groupMusic/group01-02.png";
import group01_03 from "../../img/groupMusic/group01-03.png";
import group01_04 from "../../img/groupMusic/group01-04.png";
import group01_05 from "../../img/groupMusic/group01-05.png";
import footer from "../../img/footer.png";

import styles from "./Main.module.css";
import SendDocs from "../SendDocs/SendDocs";
import StudyWays from "../StudyWays/StudyWays";
import Footer from "../Footer/Footer";
export default class Main extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  state = {
    departments: {
      "Фортепіанний відділ": [
        {
          id: 1,
          // img: "../../img/teachers/1-1.png",
          // img: "/src/img/teachers/1-1.png",
          img: piano1,
          info:
            "Завідувачка фортепіанного відділу, викладач класу фортепіано, концертмейстер",
          name: "Самойлова Юлія Олегівна",
        },
        {
          id: 2,
          img: piano2,
          info:
            "Заступник директора з навчально-виховної роботи, викладач класу фортепіано, концертмейстер",
          name: "Колодяжна Марина Володимирівна",
        },
        {
          id: 3,
          img: piano3,
          info: "Викладач класу фортепіано, концертмейстер",
          name: "Призенко Олена Вячеславівна",
        },
        {
          id: 4,
          img: piano3,
          info: "Викладач класу фортепіано, сольного співу, концертмейстер",
          name: "Книшенко Наталія Петрівна",
        },
        {
          id: 5,
          img: piano2,
          info: "Викладач теоретичних дисциплін",
          name: "Урсакій Тетяна Миколаївна",
        },
        {
          id: 6,
          img: piano1,
          // img: "./Teachers/img/2-3.png",
          info: "Викладач класу фортепіано, концертмейстер",
          name: "Рубан Тетяна Миколаївна",
        },
        {
          id: 7,
          // img: "./Teachers/img/3-1.png",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YGTtgpHFV5RJvsBCIHiNKQHaEK%26pid%3DApi&f=1",
          info: "Викладач класу фортепіано, концертмейстер",
          name: "Самодай Тетяна Миколаївна",
        },
        {
          id: 8,
          img: "./Teachers/img/3-2.png",
          info: "Концертмейстер, викладач класу фортепіано",
          name: "Кварта Ольга Юріївна",
        },
        {
          id: 9,
          img: "./Teachers/img/3-3.png",
          info: "Викладач класу сольного співу",
          name: "Кравченко Ірина Борисівна",
        },
      ],
      "Оркестровий відділ": [
        {
          id: 12,
          img: piano1,
          info: "Завідувачка оркестрового відділу, викладач класу скрипки",
          name: "Мельник Любов Борисівна",
        },
        {
          id: 13,
          img: piano2,
          info: "Викладач класудухових інструментів",
          name: "Маснуха Іван Іванович",
        },
        {
          id: 14,
          img: piano2,
          info: "Викладач класу скрипки",
          name: "Петренко Ірина Володимирівна",
        },
        {
          id: 15,
          img: piano3,
          info: "Викладач класудухових та ударних інструментів",
          name: "Сосєдко Юрій Васильович",
        },
      ],
      "Відділ народних інструментів": [
        {
          id: 21,
          img: piano1,
          info:
            "Завідувачка відділу народних інструментів, викладач класу домри, гітари",
          name: "Івашина Тетяна Анатоліївна",
        },
        {
          id: 22,
          img: piano2,
          info: "Викладач класу домри, гітари",
          name: "Карташова Ірина Миколаївна",
        },
        {
          id: 23,
          img: piano3,
          info: "Директор школи, викладач класу баяну, акордеону",
          name: "Галушкіна Світлана Олександрівна",
        },
        {
          id: 24,
          img: piano3,
          info: "Викладач класу баяну, акордеону, гітари",
          name: "Карачевцева Ірина Олексіївна",
        },
        {
          id: 25,
          img: piano1,
          info: "Викладач класу баяну, акордеону, гітари",
          name: "Рубан Зінаїда Миколаївна",
        },
      ],
      "НАПРЯМКИ НАВЧАННЯ": [
        {
          id: 31,
          img: piano1,
          name: "Вокал",
        },
        {
          id: 32,
          img: piano1,
          name: "Скрипка",
        },
        {
          id: 33,
          img: piano2,
          name: "Фортепіано",
        },
        {
          id: 34,
          img: piano3,
          name: "Акордеон, баян",
        },
        {
          id: 35,
          img: piano2,
          name: "Гітара",
        },
        {
          id: 36,
          img: piano1,
          name: "Мідні духові",
        },
        {
          id: 37,
          img: piano3,
          name: "Дерев’яні духові",
        },
      ],
      "КОЛЕКТИВНЕ МУЗИКУВАННЯ": {
        innerLeftGroup1: [
          {
            id: 101,
            img: group01_01,
            name: "Духовий оркестр",
            yaer: "Рік створення 1969р.",
            director: "Керівник І.І. Маснуха.",
            info: `  
                   Досягнення: фестивал та конкурси: духових оркестрів в таборі “Молода гвардія” м.Одеса, “Сонячні кларнети” м.Київ, “Азовські вітрила” м.Бердянськ, “Золотий лелека” м.Миколаїв, “Сурми Конституції” м.Суми, “Боромля”, “Чарівна мідь оркестрів” м.Суми.`,
          },
          {
            id: 102,
            img: group01_02,
            name: "Інструментальний ансамбль «КаданС»",
            yaer: "Рік створення 2010 р.",
            director: "Керівник - Ю.В. Сосєдко.",
            info:
              " Досягнення: фестивалі та конкурси: «Джаз-Вітраж», «Боромля».",
          },
          {
            id: 103,
            img: group01_03,
            name: "Ансамбль гітаристів",
            yaer: "Рік створення 2017р.",
            director: "Керівник І.М. Карташова.",
            info:
              "Досягнення: фестивалі та конкурси: «Весняний заспів Тростянеччини», «Чайковський-FEST, «Камерата»; «Джаз-Вітраж»; “Боромля”, «Барви Полтави», “La Cvart”, «Арт Домінанта»",
          },
          {
            id: 104,
            img: group01_04,
            name: "Хор молодших класів",
            yaer: "",
            director: "",
            info: "Керівник  Н.П. Книшенко.",
          },
          {
            id: 105,
            img: group01_05,
            name: "Дует домристів",
            yaer: "",
            director: "",
            info: "Керівник  І.М. Карташова.",
          },
        ],
        innerRight: [
          {
            id: 201,
            img: group01_01,
            name: "Ансамбль скрипалів «Елегія»",
            yaer: "Рік створення 1975 р",
            director: "Керівник  М.С. Рудик (з 1975 до 1997рр.).",
            info:
              "Досягнення: фестивалі та конкурси: «Весняний заспів Тростянеччини», «Чайковський-FEST», “Чарівний смичок”,  “Зірковий дощ”, «Джаз-Вітраж», “Боромля”, «Слобожанська осінь».",
          },
          {
            id: 202,
            img: group01_03,
            name: "Ансамбль викладачів",
            yaer: "Рік створення 2010 р",
            director: "Керівник С.О. Галушкіна .",
            info: group01_01,
          },
          {
            id: 203,
            img: group01_02,
            name: "Ансамбль домристів",
            yaer: "Рік створення 2018 р",
            director: "Керівник Т.А. Івашина.",
            info: "Досягнення: фестивалі та конкурси: «Барви Полтави».",
          },
          {
            id: 204,
            img: "",
            name: "Ансамбль народних інструментів",
            yaer: "",
            director: "Керівник З.М. Рубан.",
            info: "",
          },
          {
            id: 205,
            img: "",
            name: "Дует гітаристів",
            yaer: "",
            director: "Керівник Т.А. Івашина.",
            info: "",
          },
        ],
        innerLeftGroup2: [
          {
            id: 301,
            img: group01_02,
            name: "Дитячий вокальний ансамбль «Зернятко»",
            yaer: "Рік створення 2007 р",
            director: "Керівник О. В. Призенко.",
            info:
              "Досягнення:  фестивалі та конкурси: «Боромля», «Котилася торба», «Від Різдва до Водохреща».",
          },
          {
            id: 302,
            img: group01_03,
            name: "Камерний ансамбль «Квінтолька»",
            yaer: "Рік створення 2015 р",
            director:
              "Керівники:  І.В. Петренко, Т.А. Івашина та М.В. Колодяжна",
            info:
              "Досягнення: фестивалі та конкурси: «Джаз-Вітраж», «Пролісок»",
          },
          {
            id: 303,
            img: group01_04,
            name: "Вокальний ансамбль «Зорепад»",
            yaer: "Рік створення 2017 р",
            director: "Керівник Т.А. Івашина.",
            info: group01_01,
          },
          {
            id: 304,
            img: "",
            name: "Фортепіанний ансамбль",
            yaer: "",
            director: "",
            info: "",
          },
        ],
      },
      "ПОДАЧА ДОКУМЕНТІВ": [
        {
          id: 401,
          img: piano1,
          name: "Вік",
          info: "6-16 років",
        },
        {
          id: 402,
          img: piano2,
          name: "Шаблони заявок",
          doc: "Документ1.docx",
          doc1: "Документ2.docx",
          doc2: "Документ3.docx",
        },
        {
          id: 403,
          img: piano3,
          name: "Літо та зима",
          info: "20.08  - 31.08",
          info1: "20.02  - 28.02",
        },
      ],
    },
    footer: footer,
    author:
      "Made with love by <a>zart</a> — fork or suggest edits on <a>GitHub</a>",
  };

  // handleIncrement(evt) {
  //   // ...
  // }

  render() {
    return (
      <main className={styles.wrapper}>
        <Info />
        {/* <Teachers
          data={this.state.departments}
        /> */}

        <Teachers
          data={this.state.departments["Фортепіанний відділ"]}
          title={"Фортепіанний відділ"}
        />
        <Teachers
          data={this.state.departments["Оркестровий відділ"]}
          title={"Оркестровий відділ"}
        />
        <Teachers
          data={this.state.departments["Відділ народних інструментів"]}
          title={"Відділ народних інструментів"}
        />
        <StudyWays
          data={this.state.departments["НАПРЯМКИ НАВЧАННЯ"]}
          title={"НАПРЯМКИ НАВЧАННЯ"}
        />
        <GroupMusic {...this.state} />
        <SendDocs
          data={this.state.departments["ПОДАЧА ДОКУМЕНТІВ"]}
          title={"ПОДАЧА ДОКУМЕНТІВ"}
        />
        <Footer data={this.state.footer} author={this.state.author} />
      </main>
    );
  }
}
