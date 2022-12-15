import axios from "axios";

export const burguerKenzieApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 5000,
});
