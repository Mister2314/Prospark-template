import { useEffect, useRef, useState } from "react";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1100;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="second-bottom-box" ref={ref}>
      <div className="sbb-up" aria-label={`${value}${suffix} ${label}`}>
        <span aria-hidden="true">
          {n} <span className="sbb-suffix">{suffix}</span>
        </span>
      </div>
      <div className="sbb-down">{label}</div>
    </div>
  );
}

export default function Second() {
  return (
    <section className="second">
      <div className="second-container">
        <div className="second-up">
          <div className="second-textbox">
            <div data-aos="fade-up" className="second-textbox-up">
              <h2>About</h2>
            </div>
            <div data-aos="fade-up" className="second-textbox-bottom">
              <img src="/assets/img/star.svg" alt="" />
              <h2>Us</h2>
            </div>
          </div>
        </div>

        <div className="second-bottom">
          <div className="second-bottom-container">
            <h6 data-aos="fade-up">
              We're a marketing team that treats every brand like a product
              launch: sharp positioning, measured campaigns, and creative that
              earns attention instead of renting it.
            </h6>
            <p data-aos="fade-up">
              From the first audit to the last report, you work with the people
              who actually run your ads, write your copy, and ship your pages —
              no hand-offs, no black boxes.
            </p>
          </div>

          <div data-aos="fade-up" className="second-bottom-boxes">
            <Stat value={40} suffix="+" label="Happy Clients" />
            <Stat value={360} suffix="+" label="Projects Done" />
            <Stat value={14} suffix="+" label="Team Members" />
            <Stat value={99} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
}
