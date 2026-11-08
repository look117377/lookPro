import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lookPro",
  description: "A modern web app built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
