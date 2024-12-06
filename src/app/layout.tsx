import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Map9",
  description: "A futuristic tool to visuilze data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
      className = "bg-gradient-to-r from-rose-100 to-teal-100 z-20"
      >
        {children}
      </body>
    </html>
  );
}
