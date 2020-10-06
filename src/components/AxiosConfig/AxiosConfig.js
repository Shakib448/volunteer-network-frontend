import axios from "axios";

const instance = axios.create({
  baseURL: "https://gentle-plateau-19980.herokuapp.com",
});

export default instance;
