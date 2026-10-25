import { useState } from "react";
import type { FormEvent } from "react";

const menu = [
  { label: "Home", href: "./index.html" },
  { label: "Service", href: "./service.html" },
  { label: "About Us", href: "./index.html#about" },
  { label: "Awards", href: "./index.html#awards" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Ads Design", href: "./service.html" },
  { label: "SEO Marketing", href: "./service.html" },
  { label: "Email Marketing", href: "./service.html" },
  { label: "Content Marketing", href: "./service.html" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("done");
  };

  return (
    <footer id="contact">
      <div data-aos="fade-up" className="footer-container">
        <div className="footer-up">
          <div className="footer-left">
            <div className="img">
              <a href="./index.html" aria-label="Prospark home">
                <img src="/assets/img/nav-logo.webp" alt="Prospark" />
              </a>
            </div>
            <form action="/" onSubmit={submit} noValidate>
              <label htmlFor="email-2">Newsletter</label>
              <p>
                Sign up to receive latest news <br /> and exclusive content.
              </p>
              <div className="input-container">
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email-2"
                  required
                  autoComplete="email"
                  aria-invalid={state === "error"}
                  aria-describedby="newsletter-status"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state !== "idle") setState("idle");
                  }}
                />
                <button type="submit" className="input-button">
                  <h2>Subscribe</h2>
                </button>
              </div>
              <p id="newsletter-status" role="status" aria-live="polite" className="newsletter-status">
                {state === "done"
                  ? "Thanks — you're on the list."
                  : state === "error"
                    ? "Please enter a valid email address."
                    : ""}
              </p>
            </form>
          </div>
          <div className="footer-right">
            <div className="footer-box">
              <h2>Menu</h2>
              {menu.map((m) => (
                <p key={m.label}>
                  <a href={m.href}>{m.label}</a>
                </p>
              ))}
            </div>
            <div className="footer-box">
              <h2>Services</h2>
              {services.map((m) => (
                <p key={m.label}>
                  <a href={m.href}>{m.label}</a>
                </p>
              ))}
            </div>
            <div className="footer-lastbox">
              <h2>Get in touch</h2>
              <p>
                <a href="mailto:hello@prospark.agency">hello@prospark.agency</a>
              </p>
              <p>
                <a href="tel:+15550000000">+1 (555) 000-0000</a>
              </p>
              <p>Mon–Fri, 9:00–18:00</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>
              © Copyright 2024 · Prospark Template
            </p>
          </div>
          <div className="footer-bottom-right">
            <a href="mailto:hello@prospark.agency" className="footer-bottom-right-button" aria-label="Email us">
              <img src="/assets/img/message.webp" alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
