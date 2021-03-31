import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

function Handbook() {
  return (
    <div>
      <a href="/handbook/frogtownhistory">
        <div className="homeLauncher" style={cardStyle}>
          <h3> 
            <FontAwesomeIcon
                id="goinHome"
                icon={faBook}
                className="fas fa-book"
              />
              {"  "}  
            <span>History of Frogtown</span>
          </h3>
        </div>
      </a>
      <a href="/handbook/farmhistory">
        <div className="homeLauncher" style={cardStyle}>
          <h3><FontAwesomeIcon
                id="goinHome"
                icon={faBook}
                className="fas fa-book"
              />{"  "}
            <span>History of the farm</span>
          </h3>
        </div>
      </a>
      <a href="/handbook/supporters">
        <div className="homeLauncher" style={cardStyle}>
          <h3><FontAwesomeIcon
                id="goinHome"
                icon={faBook}
                className="fas fa-book"
              />{"  "}
            <span>Community supporters</span>
          </h3>
        </div>
      </a>
      <a href="/">
        <div className="homeLauncher" style={cardStyle}>
          <h3 className="text-muted">
            <span><FontAwesomeIcon
                id="goinHome"
                icon={faArrowLeft}
                className="fas fa-home"
              /> Home <FontAwesomeIcon
                id="goinHome"
                icon={faHome}
                className="fas fa-home"
              /></span>
          </h3>
        </div>
      </a>
    </div>
  );
}

export default Handbook;
