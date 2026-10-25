import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", key: "home" },
  { label: "About", key: "about", href: "#about" },
  { label: "Service", key: "service" },
  { label: "Blog", key: "blog", href: "#awards" },
  { label: "Pricing", key: "pricing", href: "#contact" },
];

export default function Nav({
  homeHref,
  serviceHref,
  active,
}: {
  homeHref: string;
  serviceHref: string;
  active?: "home" | "service";
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const hrefFor = (key: string) =>
    key === "home" ? homeHref || "./index.html" : key === "service" ? serviceHref || "./service.html" : links.find((l) => l.key === key)?.href || "#";

  return (
    <nav className={scrolled ? "nav-scrolled" : undefined} aria-label="Main">
      <div className="nav-container">
        <div className="nav-left">
          <a href={homeHref || "./index.html"} aria-label="Prospark home">
            <img src="/assets/img/nav-logo.webp" alt="Prospark" />
          </a>
        </div>

        <div className="nav-middle" id="nav-menu">
          {links.map((l) => {
            const isActive = l.key === active;
            const hasChevron = l.key === "home" || l.key === "about";
            return (
              <a key={l.key} href={hrefFor(l.key)} aria-current={isActive ? "page" : undefined}>
                <div className="icon-text">
                  <p className={isActive ? "nav-active" : undefined}>{l.label}</p>
                  {hasChevron && (
                    <svg className="arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.5em" viewBox="0 0 48 48">
                      <path fill="none" stroke="#787c83" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M36 18L24 30L12 18" />
                    </svg>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="nav-right">
          <ThemeToggle />
          <div className="shop">
            <img src="/assets/img/shopping.png" alt="" aria-hidden="true" />
          </div>
          <a className="nav-button" href="#contact">
            <p>Get in touch</p>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" />
            </svg>
          </a>
          <button
            type="button"
            className="nav-burger"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile" role="group" aria-label="Mobile menu">
          {links.map((l) => (
            <a key={l.key} href={hrefFor(l.key)} onClick={() => setOpen(false)}>
              <p>{l.label}</p>
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            <p className="nav-mobile-cta">Get in touch</p>
          </a>
          <div className="nav-mobile-theme">
            <p className="nav-mobile-theme-label">Theme</p>
            <ThemeToggle mobile />
          </div>
        </div>
      )}
    </nav>
  );
}
