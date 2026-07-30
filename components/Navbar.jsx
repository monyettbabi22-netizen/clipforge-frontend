"use client";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-cyan-400">
          🚀 CLIPFORGE AI
        </h1>

        <p className="text-zinc-400 text-sm">
          AI YouTube Shorts Generator
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition">
          Dashboard
        </button>

        <button className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition">
          New Project
        </button>
      </div>
    </nav>
  );
}
