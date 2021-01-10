import { postData } from "../api/api";

const formData = () => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    selectors = document.querySelectorAll("select"),
    clearInputs = () => {
      inputs.forEach((item) => (item.value = ""));
      selectors.forEach((item) => (item.value = ""));
    };
  const formData = new FormData(form);
  const fd = formData.forEach((name, value) =>
    console.log("object", name, ":", value)
  );

  // postData(formData)
  //   .then((res) => console.log("res", res))
  //   .catch((error) => {
  //     console.log("error", error);
  //     throw new Error(error);
  //   })
  //   .finally(() => clearInputs());

  // clearInputs();
};
export default formData;
