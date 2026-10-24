const ArrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.105.074l.014.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.092l.01-.009l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        fill="black"
        d="M18 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8.414l-9.95 9.95a1 1 0 0 1-1.414-1.414L15.586 7H10a1 1 0 1 1 0-2z"
      />
    </g>
  </svg>
);

export default function Fourth() {
  return (
    <section className="fourth" id="awards">
      <div className="fourth-boxes-container">
        <div className="fourth-up">
          <div className="fourth-textbox">
            <div className="fourth-textbox-up">
              <h2 data-aos="fade-up">Our</h2>
            </div>
            <div className="fourth-textbox-bottom">
              <img data-aos="fade-up" src="/assets/img/star.svg" alt="" />
              <h2 data-aos="fade-up">Awards</h2>
            </div>
          </div>
        </div>

        <div className="fourth-boxes">
          <div data-aos="fade-up" className="fourth-boxes-left">
            <div data-aos="fade-up" className="fourth-circle">
              01
            </div>
            <h2 data-aos="fade-up">CSS Design House</h2>
          </div>
          <div className="fourth-boxes-right">
            <p data-aos="fade-up">Best Design/2024</p>
            <div data-aos="fade-up" className="fourth-circle2">
              {ArrowSvg}
            </div>
          </div>
        </div>
        <div className="fourth-boxes">
          <div data-aos="fade-up" className="fourth-boxes-left">
            <div data-aos="fade-up" className="fourth-circle">
              02
            </div>
            <h2 data-aos="fade-up">Berlin Design Awards</h2>
          </div>
          <div className="fourth-boxes-right">
            <p data-aos="fade-up">Best Design/2024</p>
            <div data-aos="fade-up" className="fourth-circle2">
              {ArrowSvg}
            </div>
          </div>
        </div>
        <div className="fourth-boxes">
          <div data-aos="fade-up" className="fourth-boxes-left">
            <div className="fourth-circle">03</div>
            <h2>New York City Design Awards</h2>
          </div>
          <div className="fourth-boxes-right">
            <p data-aos="fade-up">Best Design/2024</p>
            <div data-aos="fade-up" className="fourth-circle2">
              {ArrowSvg}
            </div>
          </div>
        </div>
        <div className="fourth-boxes">
          <div data-aos="fade-up" className="fourth-boxes-left">
            <div className="fourth-circle">04</div>
            <h2>Red Dot Design Awards</h2>
          </div>
          <div className="fourth-boxes-right">
            <p data-aos="fade-up">Best Design/2024</p>
            <div data-aos="fade-up" className="fourth-circle2">
              {ArrowSvg}
            </div>
          </div>
        </div>
        <div className="fourth-boxes">
          <div data-aos="fade-up" className="fourth-boxes-left">
            <div className="fourth-circle">05</div>
            <h2>Concept Design Awards</h2>
          </div>
          <div className="fourth-boxes-right">
            <p data-aos="fade-up">Best Design/2024</p>
            <div data-aos="fade-up" className="fourth-circle2">
              {ArrowSvg}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
