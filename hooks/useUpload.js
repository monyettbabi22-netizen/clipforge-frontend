"use client";

import { useState } from "react";
import { uploadVideo } from "../lib/upload";

export default function useUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  async function upload(file) {
    setUploading(true);
    setProgress(20);

    try {
      const data = await uploadVideo(file);

      setProgress(100);
      setResult(data);

      return data;
    } finally {
      setUploading(false);
    }
  }

  return {
    uploading,
    progress,
    result,
    upload,
  };
}
