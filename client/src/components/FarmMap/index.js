import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function FarmMap() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          title="farm map"
          width="646"
          height="491"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=941%20Lafond%20Ave,%20St%20Paul,%20MN%2055104&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <a href="/home">
        <button id="goinHomeBtn" type="button" class="btn btn-success">
          <span>
            <FontAwesomeIcon
              id="goinHome"
              icon={faArrowLeft}
              class="fas fa-home"
            />{" "}
            Return home{" "}
            <FontAwesomeIcon id="goinHome" icon={faHome} class="fas fa-home" />
          </span>
        </button>
      </a>
    </div>
  );
}

export default FarmMap;
