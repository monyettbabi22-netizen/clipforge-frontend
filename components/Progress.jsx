"use client";

export default function Progress({progress=65}){

return(

<div className="bg-zinc-900 rounded-xl p-6">

<h2 className="text-white mb-4">

Processing

</h2>

<div className="w-full h-5 bg-zinc-700 rounded-full">

<div

className="bg-blue-500 h-5 rounded-full"

style={{width:`${progress}%`}}

/>

</div>

<p className="text-white mt-3">

{progress}% Complete

</p>

</div>

);

}
