// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://swapi.dev/api/",
// });

// export const getPeople = async (page = 1) => {
//   const res = await api.get(`/people/?page=${page}`);
//   return res.data;
// };

// export const getHomeworld = async (url) => {
//   const res = await axios.get(url);
//   return res.data;
// };
import axios from "axios";

// Create a reusable axios instance
const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

// ✅ Fetch all people (supports pagination + optional search)
export const getPeople = async (page = 1, search = "") => {
  const query = search
    ? `people/?search=${search}`
    : `people/?page=${page}`;
  const res = await api.get(query);
  return res.data;
};

// ✅ Fetch homeworld details for a character
export const getHomeworld = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

