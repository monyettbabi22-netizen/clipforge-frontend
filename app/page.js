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
  const [video, setVideo] = useState(null);

  const {
    uploading,
    progress,
    result,
    upload,
  } = useUpload();

  async function handleSelect(file) {
    setVideo(URL.createObjectURL(file));

    await upload(file);
  }

  return (
    <main className="min-h-screen bg-black flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="grid grid-cols-2 gap-6 p-8">

          <div className="space-y-6">

            <UploadBox
              onSelect={handleSelect}
              uploading={uploading}
            />

            <Progress progress={progress} />

          </div>

          <div className="space-y-6">

            <VideoPlayer video={video} />

            {result && <ClipCard />}

          </div>

        </div>

      </div>

    </main>
  );
}
