import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function uploadVideo(file) {
  const formData = new FormData();

  formData.append("file", file);

  const res = await axios.post(
    `${API}/process`,
    formData
    // Jangan set Content-Type secara manual
  );

  return res.data;
}
