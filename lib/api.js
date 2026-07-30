// lib/api.js

import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000",
  timeout: 600000,
});

export default API;

/**
 * Mengecek apakah backend aktif
 */
export const checkServer = async () => {
  const response = await API.get("/");
  return response.data;
};

/**
 * Upload video ke AI Engine
 */
export const processVideo = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await API.post("/process", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
