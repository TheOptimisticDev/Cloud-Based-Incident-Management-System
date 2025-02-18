import axios from "axios";

// Define the base URL of your backend
const API_BASE_URL = "http://localhost:5000/api"; // Change this to your backend URL

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
