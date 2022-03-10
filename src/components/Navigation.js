import { ReactComponent as Logo } from "../assets/images/discordLogo.svg";

function Navigation() {
  return (
    <div className="nav-container">
      {/* this 'div' and header are both accomplishing the same thing here, acting as a wrapper around your navigation elements */}
      <header>
        <nav className="discord-nav">
          <a className="discord-logo">
            <Logo />
          </a>
          <div className="nav-links">
            <a className="nav-bar" id="download" href="">
              {/* maybe 'nav__link */}
              Download
            </a>
            <a className="nav-bar" id="nitro" href="">
              Nitro
            </a>
            <a className="nav-bar" id="safety" href="">
              Safety
            </a>
            <a className="nav-bar" id="support" href="">
              Support
            </a>
            <a className="nav-bar" id="blog" href="">
              Blog
            </a>
            <a className="nav-bar" id="careers" href="">
              Careers
            </a>
          </div>
          <button className="log-in">Log In</button>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
