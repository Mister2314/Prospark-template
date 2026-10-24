export default function Nav({
  homeHref,
  serviceHref,
}: {
  homeHref: string;
  serviceHref: string;
}) {
  return (
    <nav data-aos="zoom-out">
      <div className="nav-container">
        <div className="nav-left">
          <a href="">
            <img src="/assets/img/nav-logo.webp" alt="" />
          </a>
        </div>

        <div className="nav-middle">
          <a href={homeHref}>
            <div className="icon-text">
              <p>Home</p>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#787c83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M36 18L24 30L12 18"
                />
              </svg>
            </div>
          </a>
          <a href="">
            <p>About</p>
          </a>

          <a href="">
            <div className="icon-text">
              <p>Pages</p>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#787c83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M36 18L24 30L12 18"
                />
              </svg>
            </div>
          </a>

          <a href={serviceHref}>
            <p>Service</p>
          </a>
          <a href="">
            <p>Blog</p>
          </a>
          <a href="">
            <p>Pricing</p>
          </a>
        </div>
        <div className="nav-right">
          <div className="shop">
            <img src="/assets/img/shopping.png" alt="" />
          </div>
          <div className="nav-button">
            <p>Get in touch</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-6 6l6-6m-6-6l6 6"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
