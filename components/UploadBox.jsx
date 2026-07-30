"use client";

import { useState } from "react";

export default function UploadBox() {

const [file,setFile]=useState(null);

return(

<div className="bg-zinc-900 rounded-xl p-8">

<h2 className="text-white text-xl mb-4">
Upload Video
</h2>

<input

type="file"

accept="video/*"

onChange={(e)=>setFile(e.target.files[0])}

/>

{file && (

<div className="mt-4 text-green-400">

Selected :

{file.name}

</div>

)}

<button

className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl"

>

Generate Shorts

</button>

</div>

);

}
