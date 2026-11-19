
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GhostCheck | Check Before You Apply",
  description:
    "Analyze job postings and understand potential ghost job risk signals before applying.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
