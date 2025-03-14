import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "@/components/ui/particles";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Nezosi",
  description: "Il mio sito personale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it-IT">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:max-w-screen-xl mx-auto`}
      >
        <div className="fixed top-0 left-0 w-full h-max z-0">
          <Particles />
        </div>
        <Navbar />
        <main className=" relative z-10">{children}</main>
      </body>
    </html>
  );
}
