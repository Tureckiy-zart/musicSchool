import axios from "axios";

// axios.defaults.baseURL = "http://musicschool/api/";
export const getData = async () => {
  try {
    const { data } = await axios.get("http://musicschool/api/");
    // const { data } = await axios.get("http://mschool.zzz.com.ua/components/api/");
    const reducedData = await data.reduce((r, a) => {
      r[a.depart] = r[a.depart] || [];
      r[a.depart].push(a);
      return r;
    }, {});

    const sortedData = reducedData.groupMusic.reduce((r, i) => {
      r[i.position] = r[i.position] || [];
      r[i.position].push(i);
      return r;
    }, {});

    reducedData.groupMusic = { ...sortedData };

    return reducedData;
  } catch (error) {
    console.log("error", error);
    throw new Error(error);
  }
};

export const postData = async (inputData) => {
  const url = "http://musicschool/public/api/uploadData.php ";
  const { data } = await axios.post(url, inputData);
  console.log("data", data);
  return await data;
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
