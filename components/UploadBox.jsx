"use client";

import { useRef, useState } from "react";
import { formatFileSize } from "../lib/utils";

export default function UploadBox() {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);

  const [previewName, setPreviewName] = useState("");

  const [fileSize, setFileSize] = useState("");

  function handleSelect(selectedFile) {
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("video/")) {
      alert("Silakan pilih file video.");
      return;
    }

    setFile(selectedFile);
    setPreviewName(selectedFile.name);
    setFileSize(formatFileSize(selectedFile.size));
  }

  function handleInputChange(event) {
    const selected = event.target.files[0];
    handleSelect(selected);
  }

  function openFilePicker() {
    inputRef.current?.click();
  }

  return (
    <div className="w-full max-w-2xl mx-auto">

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        hidden
        onChange={handleInputChange}
      />

      <div
        onClick={openFilePicker}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-500 p-12 text-center hover:border-cyan-400 transition"
      >
        <h2 className="text-2xl font-bold">
          Upload Video
        </h2>

        <p className="mt-3 text-gray-400">
          Klik di sini untuk memilih video
        </p>
      </div>

      {file && (
        <div className="mt-6 rounded-lg bg-zinc-900 p-5">

          <h3 className="font-semibold text-lg">
            File Dipilih
          </h3>

          <p className="mt-2">
            {previewName}
          </p>

          <p className="text-gray-400">
            {fileSize}
          </p>

        </div>
      )}

    </div>
  );
}
