export default function Footer() {
  return (
    <footer>
      <div data-aos="fade-up" className="footer-container">
        <div className="footer-up">
          <div className="footer-left">
            <div className="img">
              <a href="">
                <img src="/assets/img/nav-logo.webp" alt="" />
              </a>
            </div>
            <form action="/">
              <label htmlFor="email-2">Newsletter</label>
              <p>
                Sign up to receive latest news <br /> and exclusive content.
              </p>
              <div className="input-container">
                <input
                  placeholder="Enter your email"
                  type="text"
                  name=""
                  id="email-2"
                />
                <button type="submit" className="input-button">
                  <h2>Subscribe</h2>
                </button>
              </div>
            </form>
          </div>
          <div className="footer-right">
            <div className="footer-box">
              <h2>Menu</h2>
              <p>Home V1</p>
              <p>Home V2</p>
              <p>About Us</p>
              <p>Contact</p>
              <p>Pricing</p>
              <p>Blog</p>
              <p>Career</p>
            </div>
            <div className="footer-box">
              <h2>Pages</h2>
              <p>Service</p>
              <p>Service Single</p>
              <p>Project</p>
              <p>Project Single</p>
              <p>Pricing Single</p>
              <p>Blog Single</p>
              <p>Career Single</p>
            </div>
            <div className="footer-lastbox">
              <h2>Utility Pages</h2>
              <p>Style Guide</p>
              <p>Changelog</p>
              <p>Licence</p>
              <p>404 Not Found</p>
              <p>Protect Password</p>
              <p>See More Templates</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>
              © Copyright 2024 | Design & Developed By Onixtheme - Licensing |
              Powered By Webflow
            </p>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-bottom-right-button">
              <img src="/assets/img/message.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
