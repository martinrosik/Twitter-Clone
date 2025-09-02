import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://localhost:4923",
  headers: token
    ? { Authorization: `Bearer ${token}` }
    : {},
});

export default api;
