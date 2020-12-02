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


  render() {
    return (
      <main className={styles.wrapper}>
     
 
        {/* <Teachers
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
        /> */}
        {/* <StudyWays
          data={this.state.departments["НАПРЯМКИ НАВЧАННЯ"]}
          title={"НАПРЯМКИ НАВЧАННЯ"}
        />
        <GroupMusic {...this.state} />
        <SendDocs
          data={this.state.departments["ПОДАЧА ДОКУМЕНТІВ"]}
          title={"ПОДАЧА ДОКУМЕНТІВ"}
        />
        <Footer data={this.state.footer} author={this.state.author} /> */}
      </main>
    );
  }
}
