import React, { useState, useEffect } from "react";
import "./style.css";
// https://react-popup.elazizi.com/
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


function UserOptions() {
  return (
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
      <Popup trigger={<button>Submit changes</button>} position="right center">
        <div className="my-popup">Success!!</div>
      </Popup>
      <div></div>
    </div>
  );
}

export default UserOptions;
