import "./Footer.css";
import footerLogo from "assets/images/discordLogo.svg";

const Footer = () => {
  function optionHandler(e) {
    console.log(e.target.value);
  }
  return (
    <footer>
      <div className="footer__container">
        <div className="products links">
          <h4>Products</h4>
          <a href="">Download</a>
          <a href="">Nitro</a>
          <a href="">Status</a>
        </div>
        <div className="company links">
          <h4>Company</h4>
          <a href="">About</a>
          <a href="">Jobs</a>
          <a href="">Branding</a>
          <a href="">Newsroom</a>
        </div>
        <div className="resources links">
          <h4>Resources</h4>
          <a href="">College</a>
          <a href="">Support</a>
          <a href="">Safety</a>
          <a href="">Blog</a>
          <a href="">Feedback</a>
          <a href="">Developer</a>
          <a href="">StreamKit</a>
        </div>
        <div className="policies links">
          <h4>Policies</h4>
          <a href="">Term</a>
          <a href="">Privacy</a>
          <a href="">Cookie Settings</a>
          <a href="">Guidelines</a>
          <a href="">Acknowledgements</a>
          <a href="">Licenses</a>
          <a href="">Moderation</a>
        </div>
        <div className="footer-start">
          <h2>IMAGINE A PLACE</h2>
          <select onChange={optionHandler}>
            <option id="en">English</option>
            <option id="es">Espanol</option>
            <option id="fr">Francais</option>
          </select>
        </div>
        <hr />
        <img src={footerLogo} className="footer-logo" />
        <div className="end-footer">
          <button className="footer-sign-up">Sign Up</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
