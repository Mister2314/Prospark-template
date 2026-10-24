export default function Hero({ img }: { img: string }) {
  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <p data-aos="fade-up">
          <span className="hero-first-span">home</span> / about
        </p>
        <h2 data-aos="rise" data-aos-delay="90">
          We strive to <br /> <span className="hero-second-span">Exceed your goal</span>
        </h2>
      </div>

      <div className="hero-img">
        <div data-aos="fade-up" data-aos-delay="220" className="hero-img-container">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}
