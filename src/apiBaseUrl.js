import axios from "axios";
export const ApiBase = axios.create({
  baseURL: "http://localhost:3060/",
  headers: {
    "Content-Type": "application/json",
  },
});