import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch the data:

export const fetchPosts = async (pageNumber) => {
  return (await api.get(`/posts?_start=${pageNumber}&_limit=10`)).data;
};

export const fetchIndvPost = async (id) => {
  try {
    return (await api.get(`/posts/${id}`)).data;
  } catch (error) {
    console.log(error);
  }
};
