import axios from "axios";

// axios.defaults.baseURL = "http://musicschool/api/";
console.log('999999999999', 999999999999)
export const getData = async () => {
  try {
    const { data } = await axios.get("http://musicschool/api/");
    // const { data } = await axios.get("http://mschool.zzz.com.ua/components/api/");
    console.log("data", data);
    return await data.reduce((r, a) => {
      r[a.depart] = r[a.depart] || [];
      r[a.depart].push(a);
      return r;
    }, {});
  } catch (error) {
    console.log("error", error);
    throw new Error(error);
  }
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
