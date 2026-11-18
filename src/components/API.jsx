
import axios from "axios";

export const api = async (page,limite) => {
  const res = await axios.get(
   
  `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limite}`
  );

  return res.data;
};


export const onetodo = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return res.data;
};