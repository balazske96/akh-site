import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import { Martian_Mono } from "next/font/google";
import { Caveat } from "next/font/google";

import Footer from "./components/Footer";
import { googleGtmId } from "@/constants";
import "./globals.css";
import Navbar from "./components/Navbar";

const description =
  "Ismerd meg a zenekart, hallgass bele a zenéjükbe és nézd meg hol találkozhatsz velük legközelebb!";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "A Király Halott | Hivatalos zenekari weboldal",
  description,
  openGraph: {
    type: "website",
    title: "A Király Halott | Hivatalos zenekari weboldal",
    description,
    images: ["/akh_og_image.png"],
  },
  verification: {
    google: "xc80MrYw-bwwwlvwZrRjxFYk-uejhKkVvSxwb00AYxA",
  },
  keywords: [
    "pop",
    "rock",
    "zene",
    "koncert",
    "koncertek",
    "élő zene",
    "pop-rock",
    "magyar zene",
  ],
};

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martian",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2M24QSJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </head>
      <body
        className={`${syne.variable} ${martian.variable} ${caveat.className} font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        <GoogleTagManager gtmId={googleGtmId} />
      </body>
    </html>
  );
}
