// lib/upload.js

import { processVideo } from "./api";

export async function uploadVideo(file) {
  if (!file) {
    throw new Error("Video belum dipilih.");
  }

  const result = await processVideo(file);

  return result;
}
