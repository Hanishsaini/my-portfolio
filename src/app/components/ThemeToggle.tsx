"use client";

import { useState } from "react";

type Theme = "bright" | "dark" | "electric";

const OPTIONS: { id: Theme; label: string; icon: React.ReactNode }[] = [
  {
    id: "bright",
    label: "Bright theme",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
      </svg>
    ),
  },
  {
    id: "dark",
    label: "Dark theme",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 12.9A8.6 8.6 0 1 1 11.1 3a6.7 6.7 0 0 0 9.9 9.9Z" />
      </svg>
    ),
  },
  {
    id: "electric",
    label: "Electric theme",
    icon: (
      <svg className="ico-bolt" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.2 2 4.5 13.6h6.1l-1.3 8.4 9-12.1h-6.2z" />
      </svg>
    ),
  },
];

function readTheme(): Theme {
  if (typeof document !== "undefined") {
    const t = document.documentElement.getAttribute("data-theme");
    if (t === "dark" || t === "electric" || t === "bright") return t;
  }
  return "bright";
}

/**
 * Floating theme dock (bottom-right). The active theme is applied before paint
 * by an inline head script, so the initial value is read straight from
 * <html data-theme>. Changes write back to the attribute and to localStorage.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  function choose(next: Theme) {
    const root = document.documentElement;
    root.classList.add("theming");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable; theme still applies for the session */
    }
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theming"), 480);
  }

  return (
    <div className="theme-dock" role="group" aria-label="Color theme">
      {OPTIONS.map((o) => (
        <button
          key={o.id}
          type="button"
          title={o.label}
          aria-label={o.label}
          aria-pressed={theme === o.id}
          onClick={() => choose(o.id)}
          suppressHydrationWarning
        >
          {o.icon}
        </button>
      ))}
    </div>
  );
}
