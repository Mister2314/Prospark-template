const socials = [
  {
    key: "insta",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentcolor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        />
      </svg>
    ),
  },
  {
    key: "thread",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentcolor"
          d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61S8.39 13.99 8.39 12S10.01 8.39 12 8.39s3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024l-1.617-1.879l-.027.017A9.5 9.5 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54S6.74 2.46 12 2.46s9.54 4.28 9.54 9.54a9.6 9.6 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568c-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93A6.076 6.076 0 0 0 5.93 12A6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792a3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821c.719-.547 1.256-1.336 1.553-2.285c.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457c0-6.617-5.383-12-12-12"
        />
      </svg>
    ),
  },
  {
    key: "x",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentcolor"
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        />
      </svg>
    ),
  },
];

const members = [
  { img: "/assets/img/person-1.webp", name: "Alen Smith" },
  { img: "/assets/img/person-2.webp", name: "Jhon Deo                " },
  { img: "/assets/img/person-3.webp", name: "Smith Dark" },
];

export default function Fifth() {
  return (
    <section className="fifth">
      <div className="fifth-container">
        <div className="fifth-up">
          <div className="fifth-up-up">
            <h2 data-aos="fade-up">Team</h2>
          </div>
          <div className="fifth-up-bottom">
            <img data-aos="fade-up" src="/assets/img/star.svg" alt="" />
            <h3 data-aos="fade-up">Members</h3>
          </div>
        </div>

        <div data-aos="fade-up" className="fifth-bottom">
          {members.map((m) => (
            <div className="fifth-box" key={m.img}>
              <div className="fifth-box-up">
                <img src={m.img} alt="" />
              </div>
              <div className="fifth-box-bottom">
                <div className="fifth-box-bottom-left">
                  <h2>Chief Executive Officer</h2>
                  <h4>{m.name}</h4>
                </div>
                <div className="fifth-box-bottom-right">
                  {socials.map((s) => (
                    <div className="logo" key={s.key}>
                      {s.svg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
