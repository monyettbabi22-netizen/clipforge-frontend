// lib/api.js

import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://clipforge-backend-production-bd8f.up.railway.app",
  timeout: 600000,
});

export default API;

export const checkServer = async () => {
  const response = await API.get("/");
  return response.data;
};

export const processVideo = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post("/process", formData);

  return response.data;
};
