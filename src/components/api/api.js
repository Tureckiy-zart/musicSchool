import axios from "axios";

// axios.defaults.baseURL = "http://musicschool/public/api";
export const getData = async () => {
  try {
    const { data } = await axios.get("http://musicschool/public/api/index.php");
    console.log('data', data)
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
  const url = "http://musicschool/public/api/uploadData.php";
  const { data } = await axios.post(url, inputData);
  return await data;
};

export default { getData };
