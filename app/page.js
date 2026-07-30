"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadBox from "../components/UploadBox";
import Progress from "../components/Progress";
import VideoPlayer from "../components/VideoPlayer";
import ClipCard from "../components/ClipCard";

import useUpload from "../hooks/useUpload";

export default function Home() {
  const [file, setFile] = useState(null);

  const {
    upload,
    loading,
    progress,
    result,
    error,
  } = useUpload();

  async function handleFile(selectedFile) {
    setFile(selectedFile);
    await upload(selectedFile);
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            <div className="space-y-6">

              <UploadBox
                onSelect={handleFile}
                uploading={loading}
              />

              <Progress progress={progress} />

            </div>

            <div className="space-y-6">

              <VideoPlayer file={file} />

              <ClipCard result={result} />

            </div>

          </div>

          {error && (
            <div className="mt-8 rounded-xl bg-red-500/20 border border-red-500 p-4">
              {error}
            </div>
          )}

        </main>

      </div>

    </div>
  );
}
