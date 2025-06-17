import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sang sang",
  description: "do any thing you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
