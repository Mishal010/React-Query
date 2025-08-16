import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch the data:

export const fetchPosts = async () => {
  return (await api.get("/posts")).data;
};

export const fetchIndvPost = async (id) => {
  try {
    return (await api.get(`/posts/${id}`)).data;
  } catch (error) {
    console.log(error);
  }
};
