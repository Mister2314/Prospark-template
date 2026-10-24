export default function Hero({ img }: { img: string }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <p data-aos="fade-up">
          <span className="hero-first-span">home</span> / about
        </p>
        <h2 data-aos="fade-up">
          We strive to <br /> <span className="hero-second-span">Exceed your goal</span>
        </h2>
      </div>

      <div className="hero-img">
        <div data-aos="fade-up" className="hero-img-container">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}
