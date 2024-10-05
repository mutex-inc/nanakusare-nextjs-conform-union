import type { Metadata } from "next";
import type React from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Front-end Scaffold with Next.js",
  description: "A front-end scaffold with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
