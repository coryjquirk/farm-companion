import React from "react";
import "./style.css";

function Nav() {
    return (
      <nav  id="farmNav" class="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/home">
                home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shop">
                shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout">
                checkout
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shopAdmin">
                admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dashboard">
                sign out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Nav;
