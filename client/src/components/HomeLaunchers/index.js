import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faCog } from "@fortawesome/free-solid-svg-icons";

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

function HomeLaunchers() {
  return (
    <div id="homeLauncherList">
      <a href="/inventoryhome">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Farm Inventory</span>
          </h3>
        </div>
      </a>
      <a href="/timecard">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Time Card</span>
          </h3>
        </div>
      </a>
      <a href="/handbook">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Employee Handbook</span>
          </h3>
        </div>
      </a>
      <a href="/directoryhome">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Staff Directory</span>
          </h3>
        </div>
      </a>
      <a href="/documents">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Employee Documents</span>
          </h3>
        </div>
      </a>
      <a href="/farmmap">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Farm Map</span>
          </h3>
        </div>
      </a>
      <a href="/options">
        <div class="homeLauncher" style={cardStyle}>
          <h3 class="text-muted">
            <span>Options{" "}<FontAwesomeIcon
                id="goinHome"
                icon={faCog}
                class="fas fa-home"
              /></span>
          </h3>
        </div>
      </a>
      <a href="/dashboard">
        <div class="homeLauncher" style={cardStyle}>
          <h3 class="text-muted">
            <span>Sign Out</span>
          </h3>
        </div>
      </a>
    </div>
  );
}

export default HomeLaunchers;
