"use client";

export default function Progress({ progress = 0 }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">
        Processing
      </h2>

      <div className="w-full h-5 bg-zinc-700 rounded-full overflow-hidden">
        <div
          className="bg-cyan-500 h-5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-zinc-300 mt-3">
        {progress}% Complete
      </p>
    </div>
  );
}
