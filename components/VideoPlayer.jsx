"use client";

export default function VideoPlayer({ video }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6">

      <h2 className="text-white mb-5">
        🎬 Video Preview
      </h2>

      {video ? (
        <video
          src={video}
          controls
          className="rounded-xl w-full"
        />
      ) : (
        <div className="text-gray-400">
          Belum ada video dipilih
        </div>
      )}

    </div>
  );
}
