import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <form
      action="/s.php"
      method="post"
      //   encType="multipart/form-data"
      name="form"
      //   onSubmit={props.onSubmit}
    >
      {/* <form action="/api/server.php" name="form" onSubmit={props.onSubmit}> */}
      <label htmlFor="img">
        Photo:
        <input id="img" type="file" name="img" />
      </label>
      <label htmlFor="title">
        Title:
        <input id="title" name="title" />
      </label>
      <label htmlFor="yaer">
        Year:
        <input id="yaer" name="yaer" />
      </label>
      <label htmlFor="director">
        Director:
        <input id="director" name="director" />
      </label>
      <label htmlFor="discription">
        Discription:
        <input id="discription" name="discription" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
export default Form;
