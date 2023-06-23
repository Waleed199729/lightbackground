import React from "react";
import "./App.css";
import Menu from "./images/menu.png";
import Logo from "./images/logo.png";
import Lamp from "./images/lamp.png";
import Light from "./images/light.png";

class App extends React.Component {
  toggleBtn() {
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");
    btn.classList.toggle("active");
    light.classList.toggle("on");
  }

  render() {
    return (
      <>
        <div className="hero">
          <nav>
            <img src={Menu} alt="image" className="menu-img" />
            <img src={Logo} className="logo" />
            <ul>
              <li>
                <a href=""> Latest </a>
              </li>
              <li>
                <a href=""> Modern </a>
              </li>
              <li>
                <a href=""> Contemporary </a>
              </li>
              <li>
                <a href=""> Affordable </a>
              </li>
            </ul>
            <button type="button" onClick={this.toggleBtn} id="btn">
              <span></span>
            </button>
          </nav>
          <div className="lamp-container">
            <img src={Lamp} className="lamp" />
            <img src={Light} className="light" id="light" />
          </div>
          <div class="text-container">
            <h1>
              Latest <br />
              in Lighting
            </h1>
            <p>
              This is the first lamp from our company. we're making a huge
              collection of modern Lamps in all categories from home use to
              officeuse.
            </p>
            <a href="">Check All Collections</a>

            <div className="control">
              <p>04</p>
              <div className="line">
                <span></span>
              </div>
              <p>05</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
