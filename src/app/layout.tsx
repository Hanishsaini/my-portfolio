import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Hanish Saini",
  description:
    "Computer science student in India, building AI tools and systems — mostly solo, mostly to understand how they actually work.",
  openGraph: {
    title: "Hanish Saini",
    description:
      "CS student building AI tools and systems — mostly solo, mostly to understand how they actually work.",
    type: "website",
  },
};

// Runs before paint so a returning dark/electric visitor never sees a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='electric'&&t!=='bright')t='bright';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='bright';}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="bright" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
