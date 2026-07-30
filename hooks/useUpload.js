"use client";

import { useState } from "react";
import { uploadVideo } from "../lib/upload";

export default function useUpload() {

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [result, setResult] = useState(null);

  const [error, setError] = useState("");

  const upload = async (file) => {

    try {

      setLoading(true);

      setError("");

      setResult(null);

      setProgress(10);

      const timer = setInterval(() => {

        setProgress((prev) => {

          if (prev >= 90) return prev;

          return prev + 10;

        });

      }, 300);

      const response = await uploadVideo(file);

      clearInterval(timer);

      setProgress(100);

      setResult(response);

    } catch (err) {

      console.error(err);

      setError("Gagal menghubungi AI Engine.");

    } finally {

      setLoading(false);

    }

  };

  const reset = () => {

    setProgress(0);

    setResult(null);

    setError("");

    setLoading(false);

  };

  return {

    upload,

    loading,

    progress,

    result,

    error,

    reset

  };

}
