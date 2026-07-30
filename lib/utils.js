// lib/utils.js

export function formatFileSize(bytes) {

  if (!bytes) return "0 MB";

  const units = ["Bytes","KB","MB","GB"];

  let size = bytes;
  let unit = 0;

  while(size >=1024){

      size /=1024;
      unit++;

  }

  return `${size.toFixed(2)} ${units[unit]}`;
}

export function getVideoDuration(seconds){

    const mins=Math.floor(seconds/60);
    const secs=Math.floor(seconds%60);

    return `${mins}:${secs.toString().padStart(2,"0")}`;

}
