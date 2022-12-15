import axios from "axios";

export const burguerKenzieApi = axios.create({
  baseURL: "hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 5000,
});
