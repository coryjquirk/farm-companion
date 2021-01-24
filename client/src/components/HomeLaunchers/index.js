import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

function HomeLaunchers() {
  return (
    <div>
      <a href="/inventory">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Seed Inventory</span>
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
      <a href="/options">
        <div class="homeLauncher" style={cardStyle}>
          <h3 class="text-muted">
            <span>Options</span>
          </h3>
        </div>
      </a>
      <a href="/dashboard">
        <div class="homeLauncher" style={cardStyle}>
          <h3 class="text-muted">
            <span>Sign me out</span>
          </h3>
        </div>
      </a>
    </div>
  );
}

export default HomeLaunchers;
