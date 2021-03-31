import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome, faArrowLeft, faFile } from "@fortawesome/free-solid-svg-icons";

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

function Documents() {
  return (
    <div>
      <a href="/payrolldocuments">
        <div className="homeLauncher" style={cardStyle}>
          <h3>
            <span>Payroll{"  "}<FontAwesomeIcon
                id="goinHome"
                icon={faFile}
                className="fas fa-home"
              /></span>
          </h3>
        </div>
      </a>
      <a href="/importantdocuments">
        <div className="homeLauncher" style={cardStyle}>
          <h3>
            <span>Important Documents{"  "}<FontAwesomeIcon
                id="goinHome"
                icon={faFile}
                className="fas fa-home"
              /></span>
          </h3>
        </div>
      </a>
      <a href="/educationalmaterials">
        <div className="homeLauncher" style={cardStyle}>
          <h3>
            <span>Educational Materials{"  "}<FontAwesomeIcon
                id="goinHome"
                icon={faFile}
                className="fas fa-home"
              /></span>
          </h3>
        </div>
      </a>
      <a href="/farmcertifications">
        <div className="homeLauncher" style={cardStyle}>
          <h3>
            <span>Farm Certifications{"  "}<FontAwesomeIcon
                id="goinHome"
                icon={faFile}
                className="fas fa-home"
              /></span>
          </h3>
        </div>
      </a>
      <a href="/">
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

export default Documents;
