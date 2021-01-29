import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NoMatch() {
  return (
    <div>
      <div
        style={{
          height: 560,
          clear: "both",
          paddingTop: 30,
          paddingBottom: 30,
          textAlign: "center",
        }}
      >
        {" "}
        <h3>404 - Page not found</h3>
        <p id="buckShot">
          Maybe we're plotting something new here.
          <i className="fas fa-tractor"></i>
        </p>
        <a href="/home">
          <button id="goinHomeBtn" type="button" className="btn btn-success">
            <span>
            <FontAwesomeIcon
                id="goinHome"
                icon={faArrowLeft}
                className="fas fa-home"
              />{" "}Return home{" "}
              <FontAwesomeIcon
                id="goinHome"
                icon={faHome}
                className="fas fa-home"
              />
            </span>
          </button>
        </a>
        <img id="stock404"
          src="https://images.unsplash.com/12/green.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          alt="404 banner"
        />
      </div>
    </div>
  );
}

export default NoMatch;
