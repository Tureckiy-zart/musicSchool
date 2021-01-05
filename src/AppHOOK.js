import React, { useState } from "react";

// import Header from "./components/Header/Header";
// import Info from "./components/Info/Info";
// import Teachers from "./components/Teachers/Teachers";

// import SendDocs from "./components/SendDocs/SendDocs";
// import StudyWays from "./components/StudyWays/StudyWays";
// import GroupMusic from "./components/GroupMusic/GroupMusic";
// import Navigation from "./components/Header/Navigation/Navigation";
import { getData } from "./components/api/api";

const AppHOOK = () => {
  const [data, setData] = useState([]),
    [isLoading, setLoader] = useState(false),
    [error, seterror] = useState([]);
  console.log("isLoading", isLoading);
  console.log("data", data);
  setData([]);
  console.log("data", data);
  // setData(
  // function gd() {
  // getData().then((data) => {
  //   // console.log("data", data);
  //   setData(data);
  //   // console.log(" data", data);
  // });
  // console.log("s", s);
  // return s;
  // }
  // gd();
  // console.log("datqqqqqqqqqqqqqqqqa", data);
  console.log("this.data.departments.study_Ways", data);
  return (
    <>
      1{/* {this.state.error && <p>Что-то пошло не так: {error.message}</p>} */}
      {/* {isLoading && <p>Loading...</p>} */}
      {/* <Header /> */}
      {/* <div className="container"> */}
      {/* {this.state.fetchData[0].depart} */}
      {/* <Info data={departments.info} /> */}
      {/* <Teachers data={this.state.departments} /> */}
      {/* <StudyWays */}
      {/* // data={this.data.departments.study_Ways} */}
      {/* title={"НАПРЯМКИ НАВЧАННЯ"} */}
      {/* /> */}
      {/* <GroupMusic
          data={this.state.departments["КОЛЕКТИВНЕ МУЗИКУВАННЯ"]}
          title={"КОЛЕКТИВНЕ МУЗИКУВАННЯ"}
        /> */}
      {/* <SendDocs
          data={this.state.departments["ПОДАЧА ДОКУМЕНТІВ"]}
          title={"ПОДАЧА ДОКУМЕНТІВ"}
        /> */}
      {/* <Footer data={this.state.footer} author={this.state.author} /> */}
      {/* </div> */}
    </>
  );
};

export default AppHOOK;
