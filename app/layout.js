import { Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sensible Movies",
  description: "A sensible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
