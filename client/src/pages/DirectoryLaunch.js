import React from "react";
import {Container } from "../components/Grid";
import DirectoryLaunchers from "../components/DirectoryLaunchers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DirectoryLaunch = () => {
  return (
    <Container fluid>
      <h2>Staff Directory</h2>
      <a href="/home">
        <button id="backBtn" class="btn btn-success">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} id="close window" />
        </button>
      </a>
      <DirectoryLaunchers/>
    </Container>
  );
};

export default DirectoryLaunch;
