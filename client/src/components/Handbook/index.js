import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

function Handbook() {
  return (
    <div>
      <a href="/frogtownhistory">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>History of Frogtown</span>
          </h3>
        </div>
      </a>
      <a href="/farmhistory">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>History of the farm</span>
          </h3>
        </div>
      </a>
      <a href="/communitypartners">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>Community partners</span>
          </h3>
        </div>
      </a>
      <a href="/whatwedo">
        <div class="homeLauncher" style={cardStyle}>
          <h3>
            <span>What we do</span>
          </h3>
        </div>
      </a>
    </div>
  );
}

export default Handbook;
