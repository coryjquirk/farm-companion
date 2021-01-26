import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

function InventoryLaunchers() {
  return (
    <div>
      <a href="/seedinventory">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Seed Inventory</span>
          </h3>
        </div>
      </a>
      <a href="/generalinventory">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>General Inventory</span>
          </h3>
        </div>
      </a>
      <a href="/">
        <div class="homeLauncher" style={cardStyle}>
          <h3 class="text-muted">
            <span><FontAwesomeIcon
                id="goinHome"
                icon={faArrowLeft}
                class="fas fa-home"
              /> Home <FontAwesomeIcon
                id="goinHome"
                icon={faHome}
                class="fas fa-home"
              /></span>
          </h3>
        </div>
      </a>
    </div>
  );
}

export default InventoryLaunchers;
