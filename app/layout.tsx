import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Heebo } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "ResumAI",
  description: "Grated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${heebo.variable}`}>{children}</body>
    </html>
  );
}
