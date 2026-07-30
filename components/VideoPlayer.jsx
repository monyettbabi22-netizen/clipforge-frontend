"use client";

import { useEffect, useState } from "react";

export default function VideoPlayer({ file }) {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (!file) {
      setVideoUrl("");
      return;
    }

    const url = URL.createObjectURL(file);

    setVideoUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return (
    <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg">

      <h2 className="text-xl font-bold text-white mb-5">
        🎬 Video Preview
      </h2>

      {!file ? (
        <div className="h-72 rounded-xl bg-zinc-800 flex items-center justify-center">

          <p className="text-zinc-400">
            Belum ada video dipilih
          </p>

        </div>
      ) : (
        <video
          src={videoUrl}
          controls
          className="rounded-xl w-full max-h-[500px]"
        />
      )}

    </div>
  );
}
