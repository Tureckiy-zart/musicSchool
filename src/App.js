// import "./App.css";
import React, { Component, useState, useEffect } from "react";
import Loader from "react-loader";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Teachers from "./components/Teachers/Teachers";

import SendDocs from "./components/SendDocs/SendDocs";
import StudyWays from "./components/StudyWays/StudyWays";
import GroupMusic from "./components/GroupMusic/GroupMusic";
import Navigation from "./components/Header/Navigation/Navigation";

import { getData, reducedData } from "./components/api/api";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  state = {
    loaded: false,
    error: null,
    groupMusic: {
      innerLeftGroup1: [
        {
          id: 101,
          img: "img/groupMusic/1/Хор молодших класів.png",
          name: "Духовий оркестр",
          yaer: "Рік створення 1969р.",
          director: "Керівник І.І. Маснуха.",
          info: `
                       Досягнення: фестивал та конкурси: духових оркестрів в таборі “Молода гвардія” м.Одеса, “Сонячні кларнети” м.Київ, “Азовські вітрила” м.Бердянськ, “Золотий лелека” м.Миколаїв, “Сурми Конституції” м.Суми, “Боромля”, “Чарівна мідь оркестрів” м.Суми.`,
        },
        {
          id: 102,
          img: "img/groupMusic/1/Інструментальний ансамбль «КаданС».png",
          name: "Інструментальний ансамбль «КаданС»",
          yaer: "Рік створення 2010 р.",
          director: "Керівник - Ю.В. Сосєдко.",
          info: " Досягнення: фестивалі та конкурси: «Джаз-Вітраж», «Боромля».",
        },
        {
          id: 103,
          img: "img/groupMusic/1/Ансамбль гітаристів.png",
          name: "Ансамбль гітаристів",
          yaer: "Рік створення 2017р.",
          director: "Керівник І.М. Карташова.",
          info:
            "Досягнення: фестивалі та конкурси: «Весняний заспів Тростянеччини», «Чайковський-FEST, «Камерата»; «Джаз-Вітраж»; “Боромля”, «Барви Полтави», “La Cvart”, «Арт Домінанта»",
        },
        {
          id: 104,
          img: "img/groupMusic/1/Хор молодших класів.png",
          name: "Хор молодших класів",
          yaer: "",
          director: "",
          info: "Керівник  Н.П. Книшенко.",
        },
        {
          id: 105,
          img: "img/groupMusic/1/Дует домристів.png",

          // img: group01_05,
          name: "Дует домристів",
          yaer: "",
          director: "",
          info: "Керівник  І.М. Карташова.",
        },
      ],
      innerRight: [
        {
          id: 201,
          img: "img/groupMusic/2/Ансамбль скрипалів «Елегія».png",
          name: "Ансамбль скрипалів «Елегія»",
          yaer: "Рік створення 1975 р",
          director: "Керівник  М.С. Рудик (з 1975 до 1997рр.).",
          info:
            "Досягнення: фестивалі та конкурси: «Весняний заспів Тростянеччини», «Чайковський-FEST», “Чарівний смичок”,  “Зірковий дощ”, «Джаз-Вітраж», “Боромля”, «Слобожанська осінь».",
        },
        {
          id: 202,
          img: "img/groupMusic/2/Ансамбль викладачів.png",
          name: "Ансамбль викладачів",
          yaer: "Рік створення 2010 р",
          director: "Керівник С.О. Галушкіна",
          // info: group01_01,
        },
        {
          id: 203,
          img: "img/groupMusic/2/Ансамбль домристів.png",
          name: "Ансамбль домристів",
          yaer: "Рік створення 2018 р",
          director: "Керівник Т.А. Івашина.",
          info: "Досягнення: фестивалі та конкурси: «Барви Полтави».",
        },
        {
          id: 204,
          img: "img/groupMusic/2/Ансамбль народних інструментів.png",
          name: "Ансамбль народних інструментів",
          yaer: "",
          director: "Керівник З.М. Рубан.",
          info: "",
        },
        {
          id: 205,
          img: "img/groupMusic/2/Дует гітаристів.png",
          name: "Дует гітаристів",
          yaer: "",
          director: "Керівник Т.А. Івашина.",
          info: "",
        },
      ],
      innerLeftGroup2: [
        {
          id: 301,
          img: "img/groupMusic/3/Дитячий вокальний ансамбль «Зернятко».png",
          name: "Дитячий вокальний ансамбль «Зернятко»",
          yaer: "Рік створення 2007 р",
          director: "Керівник О. В. Призенко.",
          info:
            "Досягнення:  фестивалі та конкурси: «Боромля», «Котилася торба», «Від Різдва до Водохреща».",
        },
        {
          id: 302,
          img: "img/groupMusic/3/Камерний ансамбль «Квінтолька».png",
          name: "Камерний ансамбль «Квінтолька»",
          yaer: "Рік створення 2015 р",
          director: "Керівники:  І.В. Петренко, Т.А. Івашина та М.В. Колодяжна",
          info: "Досягнення: фестивалі та конкурси: «Джаз-Вітраж», «Пролісок»",
        },
        {
          id: 303,
          img: "img/groupMusic/3/Вокальний ансамбль «Зорепад».png",
          name: "Вокальний ансамбль «Зорепад»",
          yaer: "Рік створення 2017 р",
          director: "Керівник Т.А. Івашина.",
          // info: group01_01,
        },
        {
          id: 304,
          img: "img/groupMusic/3/Фортепіанний ансамбль.png",
          name: "Фортепіанний ансамбль",
          yaer: "",
          director: "",
          info: "",
        },
      ],
    },
  };

  componentDidMount() {
    this.x();
  }

  async x() {
    const departments = await getData();
    this.setState((prevState) => ({
      ...prevState,
      ...departments,
      loaded: true,
    }));
  }

  render() {
    console.log("this.state", this.state);
    const {
      error,
      loaded,
      info,
      piano,
      orchestra,
      folk,
      studyWays,
      groupMusic,
      submission,
      author,
    } = this.state;
    console.log("groupMusic", groupMusic);
    return (
      <>
        <Loader loaded={loaded}>
          {/* {error && <p>Что-то пошло не так: {error.message}</p>} */}

          <div className="container">
            <Header />
            <Info data={info}></Info>
            <Teachers piano={piano} orchestra={orchestra} folk={folk} />
            <StudyWays data={studyWays} title="НАПРЯМКИ НАВЧАННЯ" />
            <GroupMusic data={groupMusic} title="КОЛЕКТИВНЕ МУЗИКУВАННЯ" />
            <SendDocs data={submission} title={"ПОДАЧА ДОКУМЕНТІВ"} />
            <Footer data={author} />
          </div>
        </Loader>
      </>
    );
  }
}

// <div className="App">
{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     */
}

// </div>
