"use client";

import { useRef } from "react";

export default function UploadBox({
  onSelect,
  uploading,
}) {
  const inputRef = useRef(null);

  const openPicker = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onSelect(file);
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleChange}
      />

      <div className="flex flex-col items-center gap-5">

        <div className="text-6xl">
          🎬
        </div>

        <h2 className="text-2xl font-bold text-white">
          Upload Video
        </h2>

        <p className="text-zinc-400 text-center">
          Pilih video yang ingin diproses oleh
          ClipForge AI.
        </p>

        <button
          onClick={openPicker}
          disabled={uploading}
          className="
            rounded-xl
            bg-cyan-500
            px-6
            py-3
            font-semibold
            text-black
            hover:bg-cyan-400
            disabled:opacity-50
          "
        >
          {uploading
            ? "Uploading..."
            : "Pilih Video"}
        </button>

      </div>

    </div>
  );
}
