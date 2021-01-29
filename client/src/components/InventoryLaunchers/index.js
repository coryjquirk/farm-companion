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
        <div className="homeLauncher" style={cardStyle}>
          <h3>
            <span>Seed Inventory</span>
          </h3>
        </div>
      </a>
      <a href="/generalinventory">
        <div className="homeLauncher" style={cardStyle}>
          <h3>
            <span>General Inventory</span>
          </h3>
        </div>
      </a>
      <a href="/home">
        <div className="homeLauncher" style={cardStyle}>
          <h3 className="text-muted">
            <span>
              <FontAwesomeIcon
                id="goinHome"
                icon={faArrowLeft}
                className="fas fa-home"
              />{" "}
              Home{" "}
              <FontAwesomeIcon
                id="goinHome"
                icon={faHome}
                className="fas fa-home"
              />
            </span>
          </h3>
        </div>
      </a>
    </div>
  );
}

export default InventoryLaunchers;
