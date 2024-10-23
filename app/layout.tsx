import type { Metadata } from "next";
import localFont from "next/font/local";
import { off } from "process";
import "./globals.css";

const palaceScript = localFont({
  src: "./fonts/PalaceScript.woff",
  variable: "--font-palace-script",
  weight: "100 900",
});

const italiana = localFont({
  src: "./fonts/Italiana.ttf",
  variable: "--font-italiana",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Nadya Spa | Salon Khusus Wanita, Pijat Hamil & Baby Spa"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${palaceScript.variable} ${italiana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
