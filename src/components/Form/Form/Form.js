import React from "react";
import styles from "./Form.module.css";
const Form = ({ onFormSubmit }) => {
  
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="img">
        Photo:
        <input id="img" type="file" name="img" />
      </label>
      <label htmlFor="title">
        Title:
        <input id="title" name="title" />
      </label>
      <label htmlFor="year">
        Year:
        <input id="year" name="year" />
      </label>
      <label htmlFor="director">
        Director:
        <input id="director" name="director" />
      </label>
      <label htmlFor="discription">
        Discription:
        <input id="discription" name="discription" />
      </label>
      <label htmlFor="position">
        Position:
        <select  id="position" name="position">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
export default Form;
