import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CEYLON CHECKMATE | High-Stakes 1v1 Action Strategy by DarkPixel Studios",
  description:
    "A realistic 3D chess game meets fast-paced physical combat in a dystopian island controlled by Rogue AI. Developed on Unreal Engine 5 by DarkPixel Studios.",
  keywords: [
    "Ceylon Checkmate",
    "DarkPixel Studios",
    "Unreal Engine 5",
    "Chess Combat",
    "Action Strategy",
    "1v1 Multiplayer",
    "Sci-Fi Gaming",
  ],
  icons: {
    icon: "/images/darkpixelogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#05070a] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
