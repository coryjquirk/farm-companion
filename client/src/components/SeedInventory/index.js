import React from "react";
import "./style.css";

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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbarList">
          <li>
            <a href="/home"><img id="ffLogo" src="https://handsontwincities.galaxydigital.com/content/handsontwincities.galaxydigital.com/agency/89969.jpg?1535644146?area=agency" alt="frogtown farm logo"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/inventory">
              Inventory
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/timecard">
              Time card
            </a>
          </li>
          <li class="nav-item">
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
