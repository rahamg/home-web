import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/transaction",
  headers: {
    "Content-type": "application/json"
  }
});