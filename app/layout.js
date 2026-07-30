import "./globals.css";

export const metadata = {
  title: "CLIPFORGE AI",
  description: "AI Shorts Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
