"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "building", href: "#building" },
  { label: "work", href: "#work" },
  { label: "systems", href: "#systems" },
  { label: "contact", href: "#contact" },
];

/**
 * A quiet, mostly-invisible top bar. It only resolves into a faint blurred
 * surface once the page is scrolled — premium and restrained, never loud.
 */
export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`topnav ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex max-w-[640px] items-center justify-between px-6 py-4">
        <a href="#top" className="meta bare !text-ink">
          hanish saini
        </a>
        <div className="hidden gap-5 sm:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="meta nav-link">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
