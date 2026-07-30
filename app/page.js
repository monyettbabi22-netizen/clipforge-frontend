"use client";
import {useState} from "react";

export default function Home(){
 const [video,setVideo]=useState(null);
 const [msg,setMsg]=useState("");

 async function createClip(){
  if(!video) return setMsg("Upload video dahulu");

  const form=new FormData();
  form.append("file",video);

  setMsg("Mengirim video ke AI Engine...");

  try{
   const res=await fetch(
    process.env.NEXT_PUBLIC_API_URL+"/process",
    {method:"POST",body:form}
   );
   const data=await res.json();
   setMsg(data.message);
  }catch(e){
   setMsg("Backend belum terhubung");
  }
 }

 return (
 <main style={{padding:40,fontFamily:"Arial"}}>
 <h1>🧑‍💻 CLIPFORGE AI</h1>
 <h3>YouTube Shorts Automatic Generator</h3>

 <input type="file" accept="video/*"
 onChange={e=>setVideo(e.target.files[0])}/>

 <br/><br/>

 <button onClick={createClip}>
 Generate 25-30s Shorts
 </button>

 <p>{msg}</p>

 <hr/>

 <h2>AI Features</h2>
 <ul>
 <li>Scene analysis</li>
 <li>Auto subtitle</li>
 <li>Vertical 9:16 crop</li>
 <li>Viral clip detection</li>
 <li>FFmpeg rendering</li>
 </ul>
 </main>
 )
}