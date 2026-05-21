"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay before the reveal begins, in ms — used for gentle staggering. */
  delay?: number;
  /** Element to render as. Defaults to a div. */
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Wraps content in a gentle fade + soft-blur reveal that triggers once the
 * element scrolls into view. Honours prefers-reduced-motion (shows instantly).
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // prefers-reduced-motion is handled in CSS (.reveal stays fully visible),
    // so the observer can run unconditionally without a synchronous setState.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
