import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanish",
  description: "I design systems that remove unnecessary work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}