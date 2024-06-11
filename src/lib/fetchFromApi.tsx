import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 5,
  },
  headers: {
    "x-rapidapi-key": "debc6fef6cmshccd342d7a12d825p1df1e3jsnb37b5ac72216",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
