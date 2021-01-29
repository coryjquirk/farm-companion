import React from "react";
import "./style.css";
// https://react-popup.elazizi.com/
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function UserOptions() {
  return (
    <div>
      <div id="userOptions">
        <h3>User Options</h3>
        <p id="subText">
          (This site is still in development, so this page is just for show)
        </p>
        <ui>
          <li>
            <button>This</button>
          </li>
          <li>
            <button>That</button>
          </li>
        </ui>
        <p>
          The other: <input placeholder="type here"></input>
        </p>
        <label for="plants">Choose your plant:</label>
        {"  "}

        <select name="plants" id="plants">
          <option value="hibiscus">Hibuscus</option>
          <option value="chamomile">Chamomile</option>
          <option value="lavender">Lavender</option>
          <option value="sage">Sage</option>
        </select>
        <hr />
        <Popup
          trigger={<button>Submit changes</button>}
          position="right center"
        >
          <div className="my-popup">Success!!</div>
        </Popup>
      </div>
      <a href="/inventoryhome">
        <button id="backBtn" class="btn btn-success">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} id="close window" />
        </button>
      </a>
    </div>
  );
}

export default UserOptions;
