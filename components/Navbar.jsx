"use client";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-white">
          🚀 CLIPFORGE AI
        </h1>

        <p className="text-gray-400 text-sm">
          AI YouTube Shorts Generator
        </p>
      </div>

      <div className="flex gap-3">
        <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg">
          Dashboard
        </button>

        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
          New Project
        </button>
      </div>
    </nav>
  );
}
