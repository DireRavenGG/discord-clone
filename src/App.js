import "./App.css";
import Navigation from "components/Navigation";
import Main from "components/Main";
import Footer from "components/Footer";
import CollapsibleNav from "components/CollapsibleNav";

function App() {
  let window = navigator.userAgent;
  function getOperatingSystem(system) {
    let operatingSystem = "Not known";
    if (system.indexOf("Win") !== -1) {
      operatingSystem = "Windows";
    }
    if (system.indexOf("Mac") !== -1) {
      operatingSystem = "MacOS";
    }
    if (system.indexOf("X11") !== -1) {
      operatingSystem = "UNIX";
    }
    if (system.indexOf("Linux") !== -1) {
      operatingSystem = "Linux";
    }

    return operatingSystem;
  }

  let isOS = getOperatingSystem(window);
  return (
    <div className="App">
      <Navigation />
      <CollapsibleNav isOS={isOS} />
      {/* html has <head> and <body> elements already so naming a component
      'Body' isn't the best. maybe try something like <Main /> */}
      <Main isOS={isOS} />

      <Footer />
    </div>
  );
}

export default App;
