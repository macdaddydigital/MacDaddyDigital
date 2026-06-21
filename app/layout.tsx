import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Rajdhani } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MacDaddy Digital | The Global Digital Agency",
  description: "MacDaddy Digital — the one-stop digital agency. Custom websites, mobile apps, hosting, social, SEO and retainers. Three distinct vibes. One elite agency.",
  icons: {
    icon: "/images/leatherlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${rajdhani.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0907] text-white">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
