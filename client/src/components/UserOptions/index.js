import React from "react";
import "./style.css";
// https://react-popup.elazizi.com/
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function UserOptions() {
  return (
    <div>
      <div id="userOptions">
        <h3>User Options</h3>
        <p id="subText">
          this site is still in development. this page is just for show.
        </p>
        <ui>
          <li>
            <button class="btn btn-info">This</button>
          </li>
          <li>
            <button class="btn btn-dark">That</button>
          </li>
        </ui>
        <p>
          The other: <input placeholder="type here"></input>
        </p>
        <label for="plants">Choose your plant:</label>
        {"  "}

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Hibuscus
            </a>
            <a class="dropdown-item" href="#">
              Chamomile
            </a>
            <a class="dropdown-item" href="#">
              Lavender
            </a>
            <a class="dropdown-item" href="#">
              Sage
            </a>
          </div>
        </div>
        <hr />
        <Popup
          trigger={<button class="btn btn-primary">Submit changes</button>}
          position="right center"
        >
          <div className="my-popup">Success!!</div>
        </Popup>
      </div>
      
      <a href="/">
        <button id="goinHomeBtn" type="button" className="btn btn-success">
          <span>
            <FontAwesomeIcon
              id="goinHome"
              icon={faArrowLeft}
              className="fas fa-home"
            />{" "}
            Return home{" "}
            <FontAwesomeIcon id="goinHome" icon={faHome} className="fas fa-home" />
          </span>
        </button>
      </a>
    </div>
  );
}

export default UserOptions;
