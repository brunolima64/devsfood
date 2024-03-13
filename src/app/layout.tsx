"use client";

import "./globals.css";
import { BrowserRouter } from "react-router-dom";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <BrowserRouter>
          <body>{children}</body>
        </BrowserRouter>
    </html>
  );
}
