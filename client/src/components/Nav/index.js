import React from "react";
import "./style.css";
import FrogtownLogo from "./logo512.png";
// https://react-popup.elazizi.com/
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Nav() {
  return (
    <nav id="farmNav" class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a href="/">
        <img id="mobileLogo" src={FrogtownLogo} alt="frogtown farm logo" />
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbarList" id="navbar-nav">
          <li class="nav-link">
            <a href="/">
              <img
                id="desktopLogo"
                src={FrogtownLogo}
                alt="frogtown farm logo"
              />
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/home">
              HOME
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/inventoryhome">
              INVENTORY
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/timecard">
              TIME CLOCK
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/handbook">
              HANDBOOK
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/directoryhome">
              DIRECTORY
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/documents">
              DOCUMENTS
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/farmmap">
              MAP
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/options">
              OPTIONS
            </a>
          </li>
          <li class="nav-item">
            <Popup
              trigger={<span class="nav-link">SIGN OUT</span>}
              position="right center"
            >
              <div className="my-popup">Authentication coming soon!</div>
            </Popup>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
