import drinkingSVG from "assets/images/discord-drinking.svg";
import shoeSVG from "assets/images/discord-shoe.svg";
import firstSVG from "assets/images/discord-firstimg.svg";
import secondSVG from "assets/images/discord-secondimg.svg";
import thirdSVG from "assets/images/discord-thirdimg.svg";
import lastSVG from "assets/images/discord-largebottom.svg";
import starSVG from "assets/images/discord-starfooter.svg";
import PropTypes from "prop-types";
import "components/Main.css";
/* 
  Leave an empty space between your imports and main function.
  Also good to just leave an empty space between each 'thing' anyway. 
*/
function Main(isOS) {
  /* Preference for ES6 notation of `const Body = () => {...}` */

  return (
    <div className="body-container">
      <div className="body-main-container">
        <div className="top-text">
          <h1 className="header-text">IMAGINE A PLACE...</h1>
          <p className="header-paragraph">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="main-buttons">
          <button className="download-button">Download for {isOS.isOS}</button>
          <button className="open-button">Open Discord in your browser</button>
        </div>
        <div className="main__image-container" aria-hidden="true">
          <img src={drinkingSVG} className="foreground-right" />
          <img src={shoeSVG} className="foreground-left" />
        </div>
      </div>
      <div className="main__info-container">
        <div className="grid">
          <div className="right-info-text">
            <h2 style={{ fontSize: 48 }}>
              Create an invite-only place where you belong
            </h2>
            <p style={{ fontSize: 20 }}>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
          <img src={firstSVG} className="resize-img" />
        </div>
      </div>
      <div className="main__second-info-container">
        <div className="grid">
          <div className="left-info-text">
            <h2 style={{ fontSize: 48 }}>Where hanging out is easy</h2>
            <p style={{ fontSize: 20 }}>
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>

          <img src={secondSVG} className="resize-img" />
        </div>
      </div>
      <div className="main__info-container">
        <div className="grid">
          <div className="right-info-text">
            <h2>Where hanging out is easy</h2>
            <p>
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
          <img src={thirdSVG} className="resize-img" />
        </div>
      </div>
      <div className="main__last-info-container">
        <div className="grid">
          <div className="center-info-text">
            <h2 className="last-header-text">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p>
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img src={lastSVG} className="video-call resize-img" />
        </div>
        <div className="main__ready-to-start">
          <img src={starSVG} className="star-svg" />
          <h3>Ready to start your journey?</h3>

          <button className="bottom-download-btn">
            Download for {isOS.isOS}
          </button>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  isOS: PropTypes.string,
};
export default Main;
