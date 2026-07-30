"use client";

export default function ClipCard({ result }) {

  if (!result) return null;

  return (

    <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg">

      <h2 className="text-white text-xl font-bold mb-5">

        🎬 Clip Result

      </h2>

      <div className="space-y-3">

        <div className="text-zinc-300">

          <strong>Message :</strong>

          <br />

          {result.message}

        </div>

        <div className="text-zinc-300">

          <strong>Uploaded File :</strong>

          <br />

          {result.file}

        </div>

      </div>

      <button

        className="mt-6 w-full rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold py-3"

      >

        Download (Coming Soon)

      </button>

    </div>

  );

}
