import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  return attr === "dark" ? "dark" : "light";
}

/**
 * Persisted theme toggle. Until the visitor picks a side, the site follows the
 * OS preference live (the inline head script already resolved the first paint).
 * A choice is stored in localStorage("prospark-theme") and wins from then on.
 */
export default function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      let stored: string | null = null;
      try { stored = localStorage.getItem("prospark-theme"); } catch { /* ignore */ }
      if (stored !== "dark" && stored !== "light") setTheme(currentTheme());
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("prospark-theme", next); } catch { /* ignore */ }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className={mobile ? "theme-toggle theme-toggle-mobile" : "theme-toggle"}
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}
