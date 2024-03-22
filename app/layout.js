import { Noto_Sans } from "next/font/google";
import "./globals.css";

// const inter = Noto_Sans();

export const metadata = {
  title: "SensibleMovies",
  description: "A sensible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
