import React from "react";
import "./style.css";
import FrogtownLogo from "./logo512.png"

function Nav() {
  return (
    <nav id="farmNav" class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="/home"><img id="mobileLogo" src={FrogtownLogo} alt="frogtown farm logo"/></a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbarList" id="navbar-nav">
          <li>
            <a href="/home"><img id="desktopLogo" src={FrogtownLogo} alt="frogtown farm logo"/></a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/home">
              Home
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/inventory">
              Inventory
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/timecard">
              Time card
            </a>
          </li>
          <li class="mainNav nav-item">
            <a class="nav-link" href="/handbook">
              Handbook
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/options">
              Options
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dashboard">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
