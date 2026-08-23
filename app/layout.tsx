import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Girassol,
  Grenze,
  UnifrakturMaguntia,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const engravers = localFont({
  src: "../public/font/OPTIEngraversOldEnglish.otf",
  variable: "--font-engravers-old",
});

const grenze = Grenze({
  variable: "--font-grenze",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unifraktur = UnifrakturMaguntia({
  variable: "--font-unifraktur",
  weight: "400",
  subsets: ["latin"],
});

const girassol = Girassol({
  variable: "--font-girassol",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis & Lucila",
  description: "Nuestra union",
  icons: {
    icon: "/amankay.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${engravers.variable} ${geistSans.variable} ${geistMono.variable} ${grenze.variable} ${unifraktur.variable} ${girassol.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
