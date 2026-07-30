"use client";

export default function Sidebar() {
  const menus = [
    "Dashboard",
    "Upload Video",
    "AI Projects",
    "Export",
    "Settings",
  ];

  return (
    <aside className="w-64 min-h-screen bg-zinc-900 border-r border-zinc-800 p-6">
      <h2 className="text-cyan-400 font-bold text-xl mb-8">
        CLIPFORGE
      </h2>

      <ul className="space-y-3">
        {menus.map((menu) => (
          <li
            key={menu}
            className="rounded-lg bg-zinc-800 p-3 text-white cursor-pointer hover:bg-cyan-500 hover:text-black transition-all"
          >
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
}
