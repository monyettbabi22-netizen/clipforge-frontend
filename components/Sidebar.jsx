"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 h-screen border-r border-zinc-800 p-6">

      <h2 className="text-white font-bold text-xl mb-8">
        MENU
      </h2>

      <ul className="space-y-3">

        <li className="bg-zinc-800 rounded-lg p-3 text-white cursor-pointer hover:bg-zinc-700">
          Dashboard
        </li>

        <li className="bg-zinc-800 rounded-lg p-3 text-white cursor-pointer hover:bg-zinc-700">
          Upload Video
        </li>

        <li className="bg-zinc-800 rounded-lg p-3 text-white cursor-pointer hover:bg-zinc-700">
          AI Projects
        </li>

        <li className="bg-zinc-800 rounded-lg p-3 text-white cursor-pointer hover:bg-zinc-700">
          Export
        </li>

        <li className="bg-zinc-800 rounded-lg p-3 text-white cursor-pointer hover:bg-zinc-700">
          Settings
        </li>

      </ul>

    </aside>
  );
}
