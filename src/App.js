// import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getData, postData } from "./components/api/api";
import Loader from "react-loader";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Teachers from "./components/Teachers/Teachers";
import SendDocs from "./components/SendDocs/SendDocs";
import StudyWays from "./components/StudyWays/StudyWays";
import GroupMusic from "./components/GroupMusic/GroupMusic";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form/Form";
import BackToTopBtn from "./components/buttons/BackToTopBtn/BackToTopBtn";
export default class App extends Component {
  state = {
    loaded: false,
    error: null,
  };

  componentDidMount() {
    this.asyncData();
  }

  async asyncData() {
    const departments = await getData();

    this.setState((prevState) => ({
      ...prevState,
      ...departments,
      loaded: true,
    }));
  }

  onFormSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("form"),
      inputs = document.querySelectorAll("input"),
      selectors = document.querySelectorAll("select"),
      clearInputs = () => {
        inputs.forEach((item) => (item.value = ""));
        selectors.forEach((item) => (item.value = ""));
      },
      formData = new FormData(form);
    
      postData(formData)
      .catch((error) => {
        console.log("error", error);
        throw new Error(error);
      })
      .finally(() => clearInputs());

    clearInputs();
    return formData;
  }

  render() {
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
    return (
      <>
        <Loader loaded={loaded}>
          {error && alert(`Что-то пошло не так: ${error.message}`)}
          <div className="container">
            <Route
              path="/uploadContent"
              render={() => <Form onFormSubmit={this.onFormSubmit} />}
            />
            <Header />
            <Info data={info} />
            <Teachers piano={piano} orchestra={orchestra} folk={folk} />
            <StudyWays data={studyWays} title="НАПРЯМКИ НАВЧАННЯ" />
            <GroupMusic data={groupMusic} title="КОЛЕКТИВНЕ МУЗИКУВАННЯ" />
            <SendDocs data={submission} title={"ПОДАЧА ДОКУМЕНТІВ"} />
            <Footer data={author} />
            <BackToTopBtn />
          </div>
        </Loader>
      </>
    );
  }
}
