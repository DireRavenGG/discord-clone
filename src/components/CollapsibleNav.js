import discordLogo from "assets/images/discordLogo.svg";
import navBars from "assets/images/bars-solid.svg";
import "./CollapsibleNav.css";
import { useState } from "react";
import closeButton from "assets/images/times-solid.svg";

const CollapsibleNav = (isOS) => {
  const [menuOn, setMenuOn] = useState(false);
  const menuHandler = () => {
    setMenuOn((prevMenuOn) => !prevMenuOn);
  };

  return (
    <div className="collapsibleNav__container">
      <div className="collapsibleNav-container">
        <img src={discordLogo} />
        <div className="right-side">
          <button className="collapsible-login"> Log in </button>
          <a className="openNav" onClick={menuHandler}>
            <img src={navBars} />
          </a>
        </div>
      </div>
      {menuOn ? (
        <div className="menu-div menu-theme">
          <img src={discordLogo} className="menu-logo" />
          <div className="spacer"></div>
          <nav className="popout-menu">
            <a className="collapsible-nav-bar home" href="#">
              Home
            </a>
            <a className="collapsible-nav-bar download" href="">
              Download
            </a>
            <a className="collapsible-nav-bar nitro" id="nitro" href="">
              Nitro
            </a>
            <a className="collapsible-nav-bar" id="safety" href="">
              Safety
            </a>
            <a className="collapsible-nav-bar" id="support" href="">
              Support
            </a>
            <a className="collapsible-nav-bar" id="blog" href="">
              Blog
            </a>
            <a className="collapsible-nav-bar" id="careers" href="">
              Careers
            </a>
          </nav>
          <div className="menu-footer">
            <button>Dowload for {isOS.isOS} </button>
          </div>
          <div className="closeDiv">
            <button onClick={menuHandler} className="closeButton"></button>
            <img src={closeButton} className="closeImg" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CollapsibleNav;
