import axios from "axios";

// axios.defaults.baseURL = "http://musicschool/api/";

export const getData = async () => {
  const {data} = await axios.get("http://musicschool/api/");
  return data;
};

// export const getData = () => {
//   return axios.get("http://musicschool/api/").then((response) => response.data);
// };

// axios
// .get("http://musicschool/api/")
// .then((response) => this.setState({ fetchData: [...response.data] }))

// export const addContactAPI = async (contact) => {
//   const { data } = await axios.post("http://musicschool/api/", contact);
//   return data;
// };
// export const delContactAPI = async (id) => {
//   await axios.delete(`http://musicschool/api/${id}`);
// };

export default { getData };
