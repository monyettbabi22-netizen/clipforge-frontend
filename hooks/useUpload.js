async function upload(file) {
  setUploading(true);
  setProgress(20);

  try {
    const data = await uploadVideo(file);

    setProgress(100);
    setResult(data);

    return data;
  } catch (err) {
    console.error("UPLOAD ERROR:", err);

    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
    }

    throw err;
  } finally {
    setUploading(false);
  }
}
