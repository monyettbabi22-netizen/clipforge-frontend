// lib/constants.js

export const APP_NAME = "CLIPFORGE AI";

export const MAX_VIDEO_SIZE = 1024 * 1024 * 1024; // 1GB

export const SUPPORTED_FORMATS = [
  "video/mp4",
  "video/quicktime",
  "video/x-matroska",
  "video/webm",
];

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";
